'use strict';

var querystring = require('querystring');
var url = require('url');

var hyperquest = require('hyperquest');
var xtend = require('xtend');

var oauth = require('./oauth');

var baseURL = 'http://api.parsely.com/v2';

/**
 * Makes the acutal request
 * @method  makeRequest
 * @private
 * @param   {object} qs querystring
 * @param   {object} auth auth data
 * @param   {Function} cb callback
 * @returns {object} undefined
 */
module.exports = function(path, qs, auth, cb){
  var headers = {
    'User-Agent': 'node-parsely/'+require('../package').version
  };

  if(auth.consumerKey && auth.secretKey){
    headers['X-Parsley-Auth'] = oauth(xtend(auth, qs));
  } else if(auth.sharedSecret){
    qs.secret = auth.sharedSecret;
  }

  var parselyURL = url.resolve(baseURL, path);
  var reqURL = [parselyURL, querystring.stringify(qs)].join('?');

  hyperquest(reqURL, {headers: headers})
    .on('response', function(res){
      var data;
      if(res.statusCode !== 200){
        cb(new Error('API returned '+res.statusCode));
      }

      try {
        data = JSON.parse(res.read().toString()).data;
      } catch(err){
        cb(err);
      }

      cb(null, data);
    })
    .on('error', function(err){
      cb(err);
    });
};
