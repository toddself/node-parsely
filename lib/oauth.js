'use strict';

var querystring = require('querystring');
var crypto = require('crypto');

/**
 * Generates an oauth signature based on the query strinbg
 * @private
 * @method  oauth
 * @param   {object} qs querystring
 * @returns {string} signature
 */
module.exports = function(qs){
  if(!qs.consumerKey || !qs.secretKey){
    throw new Error('To enable OAuth you must supply both a consumerKey and a secretKey');
  }
  var consumerKey = qs.consumerKey;
  var secretKey = qs.secretKey;
  delete qs.consumerKey;
  delete qs.secretKey;

  var sortedQS = Object
    .keys(qs)
    .sort()
    .reduce(function(acc, k){
      acc[k] = qs[k];
      return acc;
    }, {});

  return crypto
    .createHmac('sha1', consumerKey+secretKey)
    .update(querystring.stringify(sortedQS))
    .digest('hex');

};
