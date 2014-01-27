'use strict';

var querystring = require('querystring');
var url = require('url');

var hyperquest = require('hyperquest');

var oauth = require('./oauth');

var baseURL = 'http://api.parsely.com/v2';


/**
 * Makes the acutal request
 * @method  makeRequest
 * @private
 * @param   {object} qs querystring
 * @param   {Function} cb callback
 * @returns {undefined} undefined
 */
module.exports = function(path, qs, cb){
  var headers = {
    'User-Agent': 'node-parsely/'+require('../package').version
  };

  if(qs.consumerKey && qs.secretKey){
    headers['X-Parsley-Auth'] = oauth(qs);
  } else if(qs.sharedSecret){
    qs.secret = qs.sharedSecret;
  }

  var parselyURL = url.resolve(baseURL, path);
  var reqURL = [parselyURL, querystring.stringify(qs)].join('?');

  hyperquest(reqURL)
    .on('response', function(resp){
      if(resp.statusCode !== 200){
        cb(new Error('API returned '+resp.statusCode));
      }
      var data = JSON.parse(resp.body).data;
      cb(null, data);
    })
    .on('error', function(err){
      cb(err);
    });
};
