'use strict';

var url = require('url');
var querystring = require('querystring');
var crypto = require('crypto');

var hyperquest = require('hyperquest');

var baseURL = 'http://api.parsely.com/v2';
var yyymmdd = /\d{4}-\d{2}-d{2}/;

/**
 * Parsely API wrapper
 * @method Parsely
 * @param  {string} key Parsely API key
 */
function Parsely(key){
  if(!key){
    throw new Error('API Key must be set in order to use API');
  }
  this.useOAuth = false;
  this.consumerKey = '';
  this.secretKey = '';
  this.sharedSecret = '';
  this.apiKey = key;
}

/**
 * Enables OAuth for the Parsely API
 * @method  enableOAuth
 * @memberOf Parsely
 * @param   {string} consumer Consumer key for OAuth signing
 * @param   {string} secret Secrety key for OAuth signing
 * @returns {undefined} undefined
 */
Parsely.prototype.enableOAuth = function(consumer, secret){
  if(consumer && secret){
    this.consumerKey = consumer;
    this.secretKey = secret;
    this.useOAuth = true;
  } else {
    throw new Error('You must supply your consumerKey and secretKey');
  }
};

/**
 * Request the next page in a set of paginated results. If the result set does
 * not have pagination, will return the last set of retrieved results.
 * @method  nextPage
 * @memberOf Parsely
 * @param   {Function} cb called when operation is complete
 * @returns {undefined} undefined
 */
Parsely.prototype.nextPage = function(cb){
  if(!this.currentPage){
    cb(null, this._lastResult);
  }
  ++this.currentPage;
  this._qs.page = this.currentPage;
  this._makeRequest(this._qs, cb);
};

/**
 * Request the previous page in a set of paginated results. If the current page
 * is 1 or the result set is not paginated, will return the last set of retrieved
 * results
 * @method  prevPage
 * @memberOf Parsely
 * @param   {Function} cb Called when operation is complete
 * @returns {undefined} undefined
 */
Parsely.prototype.prevPage = function(cb){
  if(this.currentPage === 1 || !this.currentPage){
    cb(null, this._lastResult);
  } else {
    --this.currentPage;
    this._qs.page = this.currentPage;
    this._makeRequest(this._qs, cb);
  }
};

/**
 * Analytics API gateway. Please see: http://www.parsely.com/api/api_ref.html#analytics
 * @method  analytics
 * @async
 * @memberOf Parsely
 * @param   {string} type The analytics type. One of:
 *                        * post(s)
 *                        * author(s)
 *                        * section(s)
 *                        * topic(s)
 *                        * tag(s)
 *                        * post/detail
 * @param {string} [value] `value` url parameter for `/analytics/{meta}/{value}/detail` queries
 * @param   {object} opts options for post
 * @param {string} [opts.days] Number of days to consider for _hits values
 * @param {string} [opts.period_start] YYYY-MM-DD for start of data period. Must specify `opts.period_end` as well.
 * @param {string} [opts.period_end] YYYY-MM-DD for end of period. Must use `opts.period_start as well.
 * @param {string} [opts.pub_date_start] YYYY-MM-DD for start of content publish.
 * @param {string} [opts.pub_date_end] YYYY-MM-DD for end of content publish
 * @param {number} [opts.limit] number of results to return. Default: 10
 * @param {number} [opts.page] which page of results to request
 * @param {string} [opts.sort] which key to sort using. Defaulot: _hits
 * @param {string} [opts.url] URL for `post/detail/` queries. Only this and `opts.days` are valid on these types of requests
 * @param   {Function} cb [description]
 * @returns {undefined} undefined
 */
Parsely.prototype.analytics = function(type, value, opts, cb){
  var allowedTypes = ['posts', 'authors', 'sections', 'topics', 'tags',
    'post/detail', 'post', 'author', 'section', 'topic', 'tag'];

  if(typeof value === 'string'){
    type = [type, value, 'detail'].join('/');
  }

  var path = ['analytics', type].join('/');

  if(allowedTypes.indexOf(type) === -1){
    throw new Error(type+' is not an allowed type');
  }

  if(typeof opts === 'function'){
    cb = opts;
  }

  if(typeof value === 'object'){
    opts = value;
  }

  if(typeof cb !== 'function'){
    throw new Error('Supplied callback must be a function');
  }

  if(type === 'post/detail'){
    if(!opts.url || opts.url.slice(0,4) !== 'http'){
      throw new Error('You must supply the full URL for post/detail requests');
    }
  } else {
    this.currentPage = opts.page || 1;
  }

  this._qs = opts;

  this._makeRequest(path, this._qs, cb);
};


Parsely.prototype.shares = function(){

};

/**
 * Generates an oauth signature based on the query strinbg
 * @memberOf Parsely
 * @private
 * @method  _generateOAuthString
 * @param   {object} qs querystring
 * @returns {string} signature
 */
Parsely.prototype._generateOAuthString = function(qs){
  if(!this.consumerKey || !this.secretKey){
    if(!qs.consumerKey || !qs.secretKey){
      throw new Error('To enable OAuth you must supply both a consumerKey and a secretKey');
    } else {
      this.consumerKey = qs.consumerKey;
      this.secretKey = qs.secretKey;
      delete qs.consumerKey;
      delete qs.secretKey;
    }
  }

  var sortedQS = querystring
    .stringify(Object.keys(qs)
                .sort()
                .reduce(function(acc, k){
                  acc[k] = qs[k];
                  return acc;
                }, {})
              );

  return crypto
    .createHmac('sha1', this.consumerKey+this.secretKey)
    .update(sortedQS)
    .digest('hex');

};

/**
 * Makes the acutal request
 * @method  _makeRequest
 * @private
 * @memberOf Parsely
 * @param   {object} qs querystring
 * @param   {Function} cb callback
 * @returns {undefined} undefined
 */
Parsely.prototype._makeRequest = function(path, qs, cb){
  var headers = {
    'User-Agent': 'node-parsely/'+require('./package').version
  };

  qs.apikey = this.apiKey;

  if(this.useOAuth){
    headers['X-Parsley-Auth'] = this._generateOAuthString(qs);
  } else if(this.sharedSecret){
    qs.secret = this.sharedSecret;
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

module.exports = Parsely;