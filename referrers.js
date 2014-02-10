'use strict';

/**
 * @namespace  referrer
 */

var sendRequest = require('./lib/request');
var clean = require('./lib/clean-obj');
var fixDate = require('./lib/fix-date');

/**
 * Return a list of top referrers by type. Docs: [/referrers/{type}](http://www.parsely.com/api/api_ref.html#method-referrer)
 * @method  byType
 * @async
 * @memberOf referrer
 * @param   {string} type One of `social`, `search`, `other`, `internal`
 * @param   {string} apikey Your parsley API key
 * @param   {object} [opts] Options for the call.
 * @param   {string} [opts.section] Section to restrict this query to.
 * @param   {string} [opts.tag] Tag to restrict this query to.
 * @param   {string} [opts.domain] domain to restrict this query to.
 * @param   {number} [opts.days] Number of days since today to consider; defaults to 3 days. Use `days=14` or `days=30` to only consider traffic from last several days.
 * @param   {mixed} [opts.period_start] Period of data to cover. Must be specified with `period_end`.
 * @param   {mixed} [opts.period_end] Period of data to cover; must be specified with p`eriod_start`, must be greater than that value, and must not be in the future.
 * @param   {mixed} [opts.pub_date_start] Publication date. Must be specified with `pub_date_end`.
 * @param   {mixed} [opts.pub_date_end] Publication end date; must be specified with `pub_date_start`, must be greater than that value, and must not be in the future.
 * @param   {object} [auth] Authorization information. If not using, pass in `null` or `undefined`
 * @param   {string} [auth.secretKey] If using oAuth your app's secret. Must be used with `auth.consumerKey`
 * @param   {string} [auth.consumerKey] If using oAuth, your app's consumer key. Must be used with `auth.secretKey`
 * @param   {string} [auth.sharedSecret] If using shared secrets, your shared secret
 * @param   {Function} cb What to do with the results
 * @returns {object} undefined
 */
exports.byType = function(type, apikey, opts, auth, cb){
  var allowed = ['social', 'search', 'other', 'internal'];
  if(!type || allowed.indexOf(type) === -1){
    throw new Error('type is required and must be one of '+allowed.join(', '));
  }

  if(!apikey || typeof apikey !== 'string'){
    throw new Error('apikey is required to call on referrer data');
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
    apikey: apikey,
    section: opts.section,
    tag: opts.tag,
    domain: opts.domain,
    days: opts.days,
    period_start: fixDate(opts.period_start),
    period_end: fixDate(opts.period_end),
    pub_date_state: fixDate(opts.pub_date_start),
    pub_date_end: fixDate(opts.pub_date_end)
  });

  var path = ['referrers', type].join('/');
  sendRequest(path, query, auth, cb);
};

/**
 * Return a list of the top posts, authors, sections or topics referred to. Docs: [/referrers/{referrer_type}/{meta_type}](http://www.parsely.com/api/api_ref.html#method-referrer-meta)
 * @method  byTypeMetaType
 * @async
 * @memberOf referrer
 * @param   {string} type One of `social`, `search`, `other`, `internal`
 * @param   {string} meta One of `posts`, `authors`, `sections, `topics, `tags`
 * @param   {string} apikey Your parsley API key
 * @param   {object} [opts] Options for the call.
 * @param   {string} [opts.section] Section to restrict this query to.
 * @param   {string} [opts.tag] Tag to restrict this query to.
 * @param   {string} [opts.domain] domain to restrict this query to.
 * @param   {number} [opts.days] Number of days since today to consider; defaults to 3 days. Use `days=14` or `days=30` to only consider traffic from last several days.
 * @param   {mixed} [opts.period_start] Period of data to cover. Must be specified with `period_end`.
 * @param   {mixed} [opts.period_end] Period of data to cover; must be specified with p`eriod_start`, must be greater than that value, and must not be in the future.
 * @param   {mixed} [opts.pub_date_start] Publication date. Must be specified with `pub_date_end`.
 * @param   {mixed} [opts.pub_date_end] Publication end date; must be specified with `pub_date_start`, must be greater than that value, and must not be in the future.
 * @param   {object} [auth] Authorization information. If not using, pass in `null` or `undefined`
 * @param   {string} [auth.secretKey] If using oAuth your app's secret. Must be used with `auth.consumerKey`
 * @param   {string} [auth.consumerKey] If using oAuth, your app's consumer key. Must be used with `auth.secretKey`
 * @param   {string} [auth.sharedSecret] If using shared secrets, your shared secret
 * @param   {Function} cb What to do with the results
 * @returns {object} undefined
 */
exports.byMeta = function(type, meta, apikey, opts, auth, cb){
  var allowed = ['social', 'search', 'other', 'internal'];
  if(!type || allowed.indexOf(type) === -1){
    throw new Error('type is required and must be one of '+allowed.join(', '));
  }

  var allowedMeta = ['posts', 'authors', 'sections', 'topics', 'tags'];
  if(!meta || allowedMeta.indexOf(meta) === -1){
    throw new Error('meta is required and must be one of '+allowedMeta.join(', '));
  }

  if(!apikey || typeof apikey !== 'string'){
    throw new Error('apikey is required to call on referrer data');
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
    apikey: apikey,
    section: opts.section,
    domain: opts.domain,
    days: opts.days,
    period_start: fixDate(opts.period_start),
    period_end: fixDate(opts.period_end),
    pub_date_state: fixDate(opts.pub_date_start),
    pub_date_end: fixDate(opts.pub_date_end)
  });

  var path = ['referrers', type, meta].join('/');
  sendRequest(path, query, auth, cb);
};

/**
 * Returns a list of posts falling under the specified author, section or topic. Docs: [/referrers/{referrer_type}/{meta_type}/{meta_value}/detail](http://www.parsely.com/api/api_ref.html#method-referrer-meta-value)
 * @method  metaValueDetail
 * @async
 * @memberOf referrer
 * @param   {string} type One of `social`, `search`, `other`, `internal`
 * @param   {string} meta One of `posts`, `authors`, `sections, `topics, `tags`
 * @param   {string} value The value for this meta type
 * @param   {string} apikey Your parsley API key
 * @param   {object} [opts] Options for the call.
 * @param   {string} [opts.tag] Tag to restrict this query to.
 * @param   {string} [opts.domain] domain to restrict this query to.
 * @param   {number} [opts.days] Number of days since today to consider; defaults to 3 days. Use `days=14` or `days=30` to only consider traffic from last several days.
 * @param   {mixed} [opts.period_start] Period of data to cover. Must be specified with `period_end`.
 * @param   {mixed} [opts.period_end] Period of data to cover; must be specified with p`eriod_start`, must be greater than that value, and must not be in the future.
 * @param   {mixed} [opts.pub_date_start] Publication date. Must be specified with `pub_date_end`.
 * @param   {mixed} [opts.pub_date_end] Publication end date; must be specified with `pub_date_start`, must be greater than that value, and must not be in the future.
 * @param   {object} [auth] Authorization information. If not using, pass in `null` or `undefined`
 * @param   {string} [auth.secretKey] If using oAuth your app's secret. Must be used with `auth.consumerKey`
 * @param   {string} [auth.consumerKey] If using oAuth, your app's consumer key. Must be used with `auth.secretKey`
 * @param   {string} [auth.sharedSecret] If using shared secrets, your shared secret
 * @param   {Function} cb What to do with the results
 * @returns {object} undefined
 */
exports.metaValueDetail = function(type, meta, value, apikey, opts, auth, cb){
  var allowed = ['social', 'search', 'other', 'internal'];
  if(!type || allowed.indexOf(type) === -1){
    throw new Error('type is required and must be one of '+allowed.join(', '));
  }

  var allowedMeta = ['posts', 'authors', 'sections', 'topics', 'tags'];
  if(!meta || allowedMeta.indexOf(meta) === -1){
    throw new Error('meta is required and must be one of '+allowedMeta.join(', '));
  }

  if(!value || typeof value !== 'string'){
    throw new Error('value is required for call on metaValueDetail');
  }

  if(!apikey || typeof apikey !== 'string'){
    throw new Error('apikey is required to call on referrer data');
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
    apikey: apikey,
    domain: opts.domain,
    days: opts.days,
    period_start: fixDate(opts.period_start),
    period_end: fixDate(opts.period_end),
    pub_date_state: fixDate(opts.pub_date_start),
    pub_date_end: fixDate(opts.pub_date_end)
  });

  var path = ['referrers', type, meta, value, 'detail'].join('/');

  sendRequest(path, query, auth, cb);
};

/**
 * Return a list of the top referrers for a given URL. Docs: [/referrers/post/detail](http://www.parsely.com/api/api_ref.html#method-referrer-url)
 * @method  postDetail
 * @async
 * @memberOf referrer
 * @param   {string} url URL to get details on. Must start with http|https
 * @param   {string} apikey The publisher API key
 * @param   {object} [opts] Options for the call
 * @param   {number} [opts.days] Number of days since today to consider; defaults to 3 days. Use `days=14` or `days=30` to only consider traffic from last several days.
 * @param   {mixed} [opts.period_start] Period of data to cover. Must be specified with `period_end`.
 * @param   {mixed} [opts.period_end] Period of data to cover; must be specified with p`eriod_start`, must be greater than that value, and must not be in the future.
 * @param   {mixed} [opts.pub_date_start] Publication date. Must be specified with `pub_date_end`.
 * @param   {mixed} [opts.pub_date_end] Publication end date; must be specified with `pub_date_start`, must be greater than that value, and must not be in the future.
 * @param   {object} [auth] Authorization information. If not using, pass in `null` or `undefined`
 * @param   {string} [auth.secretKey] If using oAuth your app's secret. Must be used with `auth.consumerKey`
 * @param   {string} [auth.consumerKey] If using oAuth, your app's consumer key. Must be used with `auth.secretKey`
 * @param   {string} [auth.sharedSecret] If using shared secrets, your shared secret
 * @param   {Function} cb What to do with the results
 * @returns {object} undefined
 */
exports.postDetail = function(url, apikey, opts, auth, cb){
   if(!url || !url.match('^http(s?):\/\/.*')){
    throw new Error('url is required and must start with http:// https://');
  }

  if(!apikey || typeof apikey !== 'string'){
    throw new Error('apikey is required to call on referrer data');
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
    apikey: apikey,
    url: url,
    days: opts.days,
    period_start: fixDate(opts.period_start),
    period_end: fixDate(opts.period_end),
    pub_date_state: fixDate(opts.pub_date_start),
    pub_date_end: fixDate(opts.pub_date_end)
  });

  sendRequest('/referrers/post/detail', query, auth, cb);
};
