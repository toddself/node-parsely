'use strict';

var querystring = require('querystring');
var hyperquest = require('hyperquest');

function validateParams(params){
    if(!params.idsite){
    throw new Error('You must supply the idsite in params');
  }

  if(!(params.date instanceof Date)){
    params.date = new Date(params.date);
  }

  if(isNaN(params.date)){
    params.date = new Date();
  }

  params.date = params.date.toISOString();

  return params;
}

/**
 * Sends a tracking request to pixel.parsel.com
 * @method  exports
 * @param   {object} params map of values from [data insertion api](http://parsely.com/api/data_insertion_api.html)
 *     @param {string} idsite site ID assigned by parsely
 *     @param {date} [date] time/date of request.
 *     @param {string} ip_address IP Address of person performing action
 *     @param {string} url URL of page action was taken on
 *     @param {string} urlref Referrer
 *     @param {string} screen Screen dimensions: Monitor width x height|Browser width x height|color-depth: 1024x758|900x600|24
 *     @param {string} title Title of the document
 *     @param {string} action Type of request (pageview)
 *     @param {object} body user data about user being tracked
 *         @param {sting} parsely_site_uuid Unique identifier for user
 * @param   {string} [user_agent] User-Agent of browser being used
 * @param   {Function} [cb] callback to fire when request is complete
 * @returns {undefined} undefined
 */
module.exports = function(params, user_agent, cb){
  if(typeof user_agent === 'function'){
    cb = user_agent;
    user_agent = 'node-parsely/'+require('./package').version;
  }

  if(typeof cb !== 'function'){
    cb = function(){};
  }

  params = validateParams(params);
  params.rand = Math.floor(Math.random()*(1000000000));

  var query = querystring.stringify(params);
  var url = 'http://pixel.parsely.com/plogger?'+query;
  var opts = {
    headers: {
      'User-Agent': user_agent
    }
  };

  hyperquest(url, opts)
    .on('response', function(resp){
      if(resp.statusCode === 200){
        cb(null);
      } else {
        cb(new Error('Server responded with '+resp.statusCode));
      }
    })
    .on('error', function(err){
      cb(err);
    });
};