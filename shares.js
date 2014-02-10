'use strict';

/**
 * @namespace  shares
 */

var sendRequest = require('./lib/request');
var clean = require('./lib/clean');
var fixDate = require('./lib/fix-date');

/**
 * Retreive a listing of tops posts or authors by social shares across top
 * social networks. Docs: [/shares/{type}](http://www.parsely.com/api/api_ref.html#method-shares)
 * @method  byType
 * @async
 * @memberOf shares
 * @param   {string} type One of `posts`, `authors`
 * @param   {number} [opts.pub_days] Number of days since an article has been published since today to consider for _shares value. Use days=1 or days=3 to only consider shares from last several days.
 * @param   {mixed} [opts.pub_date_state] Start date of content publication to consider. Must use `opts.pub_date_end` as well.
 * @param   {mixed} [opts.pub_date_end] End date of content publication to consider. Must use `opts.pub_date_start` as well.
 * @param   {string} [opts.limit] Number of records to retrieve, detauls to `10`
 * @param   {string} [opts.page] Page number of results set, defaults to `1`
 * @param   {object} [auth] Authorization information. If not using, pass in `null` or `undefined`
 * @param   {string} [auth.secretKey] If using oAuth your app's secret. Must be used with `auth.consumerKey`
 * @param   {string} [auth.consumerKey] If using oAuth, your app's consumer key. Must be used with `auth.secretKey`
 * @param   {string} [auth.sharedSecret] If using shared secrets, your shared secret
 * @param   {Function} cb What to do when it's done!
 * @returns {object} undefined
 */
exports.byType = function(type, opts, auth, cb){
  var allowed = ['posts', 'authors'];
  if(!type || allowed.indexOf(type) === -1){
    throw new Error('type is required and must be one of '+allowed.join(', '));
  }

  if(typeof opts === 'function'){
    cb = opts;
    opts = auth = {};
  }

  if(typeof auth === 'function'){
    cb = auth;
    auth = {};
  }

  opts = opts || {};
  auth = auth || {};

  var query = clean({
    pub_days: opts.pub_days,
    pub_date_start: fixDate(opts.pub_date_start),
    pub_date_end: fixDate(opts.pub_date_end),
    limit: opts.limit,
    page: opts.page
  });

  var path = ['shares', type].join('/');
  sendRequest(path, query, auth, cb);
};

/**
 * For a given canonical URL, return the total share counts across the top
 * social networks. Docs: [/shares/post/detail](http://www.parsely.com/api/api_ref.html#method-share-post-detail)
 * @method  postDetail
 * @memberOf shares
 * @async
 * @param   {string} url Canonical URL. Must start with http|https
 * @param   {object} [auth] Authorization information. If not using, pass in `null` or `undefined`
 * @param   {string} [auth.secretKey] If using oAuth your app's secret. Must be used with `auth.consumerKey`
 * @param   {string} [auth.consumerKey] If using oAuth, your app's consumer key. Must be used with `auth.secretKey`
 * @param   {string} [auth.sharedSecret] If using shared secrets, your shared secret
 * @param   {Function} cb What to do when it's done!
 * @returns {object} undefined
 */
exports.postDetail = function(url, auth, cb){
  if(!url || !url.match('^http(s?):\/\/.*')){
    throw new Error('url is required and must start with http:// https://');
  }

  if(typeof auth === 'function'){
    cb = auth;
    auth = {};
  }

  var query = {url: url};
  sendRequest('/shares/post/detail', query, auth, cb);
};

