'use strict';

/**
 * @namespace analytics
 */

var sendRequest = require('./lib/request');
var clean = require('./lib/clean-obj');
var fixDate = require('./lib/fix-date');

/**
 * Returns a list of posts, authors, section topics  or tags depending on
 * specified type.
 * Docs: [analytics/{type}](http://www.parsely.com/api/api_ref.html#method-analytics)
 * @memberOf analytics
 * @method  byType
 * @async
 * @param   {string} type One of `posts`, `authors`, `sections`, `topics`, `tags`
 * @param   {object} [opts] A list of options for the call
 * @param   {string} [opts.days] Number of days since today to consider for _hits value. Defaults to 3.
 * @param   {mixed} [opts.period_start] Period of data to cover. Must supply `opts.period_end` as well
 * @param   {mixed} [opts.period_end] Period of data to cover, cannot be in the future. Must use `opts.period_start` as well.
 * @param   {mixed} [opts.pub_date_state] Start date of content publication to consider. Must use `opts.pub_date_end` as well.
 * @param   {mixed} [opts.pub_date_end] End date of content publication to consider. Must use `opts.pub_date_start` as well.
 * @param   {string} [opts.sort] Sort value. Defaults to `_hits`
 * @param   {string} [opts.limit] Number of records to retrieve, detauls to `10`
 * @param   {string} [opts.page] Page number of results set, defaults to `1`
 * @param   {object} [auth] Authorization information. If not using, pass in `null` or `undefined`
 * @param   {string} [auth.secretKey] If using oAuth your app's secret. Must be used with `auth.consumerKey`
 * @param   {string} [auth.consumerKey] If using oAuth, your app's consumer key. Must be used with `auth.secretKey`
 * @param   {string} [auth.sharedSecret] If using shared secrets, your shared secret
 * @param   {Function} cb What to do when it's done!
 * @returns {object} undefined
 */
exports.byType = function(key, type, opts, auth, cb){
  var allowed = ['posts', 'authors', 'sections', 'topics', 'tags'];
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
    key: key,
    days: opts.days,
    period_start: fixDate(opts.period_start),
    period_end: fixDate(opts.period_end),
    pub_date_start: fixDate(opts.pub_date_start),
    pub_date_end: fixDate(opts.pub_date_end),
    sort: opts.sort,
    limit: opts.limit,
    page: opts.page
  });

  var path = ['analytics', type].join('/');
  sendRequest(path, query, auth, cb);
};

/**
 * Returns the metadata and total pageviews for a post specified by URL.
 * Docs:  [/analytics/post/detail](http://www.parsely.com/api/api_ref.html#method-analytics-post-detail)
 * @method  postDetail
 * @memberOf analytics
 * @async
 * @param   {string} url Canonical URL for asset. Must start with http/s
 * @param   {object} [opts] A list of options for the call
 * @param   {string} [opts.days] Number of days since today to consider for _hits value. Defaults to 3.
 * @param   {object} [auth] Authorization information. If not using, pass in `null` or `undefined`
 * @param   {string} [auth.secretKey] If using oAuth your app's secret. Must be used with `auth.consumerKey`
 * @param   {string} [auth.consumerKey] If using oAuth, your app's consumer key. Must be used with `auth.secretKey`
 * @param   {string} [auth.sharedSecret] If using shared secrets, your shared secret
 * @param   {Function} cb What to do when it's done
 * @returns {object} undefined
 */
exports.postDetail = function(key, url, opts, auth, cb){
  if(!url || !url.match(/^http(s?):\/\/.*/)){
    throw new Error('url is required and must start with http:// https://');
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
    key: key,
    url: url,
    days: opts.days
  });

  sendRequest('/analytics/post/detail', query, auth, cb);
};

/**
 * Returns a list of posts falling under the specified author, section or topic.
 * Docs: [/analaytics/{meta}/{value}/detail](http://www.parsely.com/api/api_ref.html#method-analytics-detail)
 * @method  metaValueDetail
 * @memberOf analytics
 * @asnyc
 * @param   {string} meta What values to return. Must be one of `author`, `section`, `topic`, `tag`
 * @param   {string} value Search term for query
 * @param   {object} [opts] A list of options for the call
 * @param   {string} [opts.days] Number of days since today to consider for _hits value. Defaults to 3.
 * @param   {mixed} [opts.period_start] Period of data to cover. Must supply `opts.period_end` as well
 * @param   {mixed} [opts.period_end] Period of data to cover, cannot be in the future. Must use `opts.period_start` as well.
 * @param   {mixed} [opts.pub_date_state] Start date of content publication to consider. Must use `opts.pub_date_end` as well.
 * @param   {mixed} [opts.pub_date_end] End date of content publication to consider. Must use `opts.pub_date_start` as well.
 * @param   {string} [opts.sort] Sort value. Defaults to `_hits`
 * @param   {string} [opts.limit] Number of records to retrieve, detauls to `10`
 * @param   {string} [opts.page] Page number of results set, defaults to `1`
 * @param   {object} [auth] Authorization information. If not using, pass in `null` or `undefined`
 * @param   {string} [auth.secretKey] If using oAuth your app's secret. Must be used with `auth.consumerKey`
 * @param   {string} [auth.consumerKey] If using oAuth, your app's consumer key. Must be used with `auth.secretKey`
 * @param   {string} [auth.sharedSecret] If using shared secrets, your shared secret* @param   {Function} cb [description]
 * @returns {object} undefined
 */
exports.metaValueDetail = function(key, meta, value, opts, auth, cb){
  var allowed = ['author', 'section', 'topic', 'tag'];
  if(!meta || allowed.indexOf(meta) === -1){
    throw new Error('meta is required and must be one of '+allowed.join(','));
  }

  if(!value){
    throw new Error('you must specify a value to search for');
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

  var query= clean({
    key: key,
    period_start: fixDate(opts.period_start),
    period_end: fixDate(opts.period_end),
    pub_date_start: fixDate(opts.pub_date_start),
    pub_date_end: fixDate(opts.pub_date_end),
    sort: opts.sort,
    limit: opts.limit,
    page: opts.page
  });

  var path = ['analytics', encodeURI(meta), encodeURI(value), 'details'].join('/');
  sendRequest(path, query, auth, cb);
};
