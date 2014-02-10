'use strict';

/**
 * @namespace recommendations
 */

var sendRequest = require('./lib/request');
var clean = require('./lib/clean-obj');
var fixDate = require('./lib/fix-date');

/**
 * Train a user profile for the purpose of personalized recommendations. Docs: [/profile](http://www.parsely.com/api/api_ref.html#method-profile)
 * @method  profile
 * @memberOf recommendations
 * @async
 * @param   {string} uuid UUID for the user profile being trained
 * @param   {url} url The URL being trained against the profile
 * @param   {string} apikey Publisher API key
 * @param   {object} [auth] Authorization information. If not using, pass in `null` or `undefined`
 * @param   {string} [auth.secretKey] If using oAuth your app's secret. Must be used with `auth.consumerKey`
 * @param   {string} [auth.consumerKey] If using oAuth, your app's consumer key. Must be used with `auth.secretKey`
 * @param   {string} [auth.sharedSecret] If using shared secrets, your shared secret
 * @param   {Function} cb What to do with the results
 * @returns {object} undefined
*/
exports.profile = function(uuid, url, apikey, auth, cb){
  if(!uuid || typeof uuid !== 'string'){
    throw new Error('You must provide a UUID for the profile being trained');
  }

  if(!url || !url.match(/^http(s?):\/\/.*/)){
    throw new Error('url is required and must start with http:// https://');
  }

  if(!apikey || typeof apikey !== 'string'){
    throw new Error('You must provide an API key');
  }

  if(typeof auth === 'function'){
    cb = auth;
    auth = {};
  }

  auth = auth || {};

  var query = clean({
    uuid: uuid,
    url: url,
    apikey: apikey
  });

  sendRequest('/profile', query, auth, cb);
};

/**
 * Retrieve a list of post recommendations which are either personalized or for
 * a specific URL. Docs: [/related](http://www.parsely.com/api/api_ref.html#method-related)
 * @method  related
 * @async
 * @memberOf recommendations
 * @param   {string} type Recommend by `uuid` or `url`
 * @param   {string} criteria Either the UUID or URL to retrieve recommendations for
 * @param   {string} apikey The publisher API key
 * @param   {object} [opts] A list of options for the call
 * @param   {string} [opts.days] Number of days since today to consider for _hits value. Defaults to 3.
 * @param   {mixed} [opts.pub_date_state] Start date of content publication to consider. Must use `opts.pub_date_end` as well.
 * @param   {mixed} [opts.pub_date_end] End date of content publication to consider. Must use `opts.pub_date_start` as well.
 * @param   {string} [opts.limit] Number of records to retrieve, detauls to `10`
 * @param   {string} [opts.page] Page number of results set, defaults to `1`
 * @param   {string} [opts.section] Return recommendations that belong only in the specified section
 * @param   {string} [opts.author] Return recommendations that belong only to the specified author
 * @param   {string} [opts.tag] Return recommendations that belong only to the specified tag
 * @param   {string} [opts.strategy] Algorithm to use for search. One of `click` or `recency`. Defaults to `recency`
 * @param   {string} [opts.clickMethod] What click method to use for when `opts.strategy` is `click`. One of `ref_social`, `ref_search`, `ref_internal`
 * @param   {string} [opts.sort] What to sort the results by. There are currently 2 valid options: `score`, which will sort articles by overall score and `pub_date` which will sort results by their publication date. The default is `score`.
 * @param   {object} [auth] Authorization information. If not using, pass in `null` or `undefined`
 * @param   {string} [auth.secretKey] If using oAuth your app's secret. Must be used with `auth.consumerKey`
 * @param   {string} [auth.consumerKey] If using oAuth, your app's consumer key. Must be used with `auth.secretKey`
 * @param   {string} [auth.sharedSecret] If using shared secrets, your shared secret
 * @param   {Function} cb What to do when it's done!
 * @returns {object} undefined
 */
exports.related = function(type, criteria, apikey, opts, auth, cb){
  var allowed = ['url', 'uuid'];
  var allowedClickMethods = ['ref_social', 'ref_search', 'ref_internal'];
  if(!type || allowed.indexOf(type) === -1){
    throw new Error('You must specify either url or uuid as your criteria type');
  }

  if(!criteria || typeof criteria !== 'string'){
    throw new Error('You must provide either a URL or a UUID');
  }

  if(type === 'url' && !criteria.match(/^http(s?):\/\/.*/)){
    throw new Error('urls must start with http:// or https://');
  }

  if(!apikey || typeof apikey !== 'string'){
    throw new Error('You must provide an API key');
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

  if(opts.strategy === 'click' && allowedClickMethods.indexOf(opts.clickMethod) === -1){
    throw new Error('opts.clickMethod must be one of '+allowedClickMethods.join(', ')+' when opts.strategy === click');
  }

  var query = clean({
    apikey: apikey,
    days: opts.days,
    pub_date_start: fixDate(opts.pub_date_start),
    pub_date_end: fixDate(opts.pub_date_end),
    limit: opts.limit,
    page: opts.page,
    section: opts.section,
    author: opts.author,
    tag: opts.tag,
    strategy: opts.strategy,
    sort: opts.sort
  });
  if(opts.clickMethod){
    query['click.method'] = opts.clickMethod;
  }
  query[type] = criteria;


  sendRequest('/related', query, auth, cb);
};

/**
 * Retrieve a list of URLs and the corresponding clicks recorded by the API over a period. Docs: [/clicks](http://www.parsely.com/api/api_ref.html#method-clicks)
 * @method  clicks
 * @async
 * @memberOf recommendations
 * @param   {string} apikey The publisher API key
 * @param   {object} [opts] A list of options for the call
 * @param   {string} [opts.url] Restrict the listing to a specified URL
 * @param   {string} [opts.days] Number of days since today to consider for _hits value. Defaults to 3.
 * @param   {mixed} [opts.period_start] Period of data to cover. Must supply `opts.period_end` as well
 * @param   {mixed} [opts.period_end] Period of data to cover, cannot be in the future. Must use `opts.period_start` as well.
 * @param   {string} [opts.limit] Number of records to retrieve, detauls to `10`
 * @param   {string} [opts.page] Page number of results set, defaults to `1`
 * @param   {object} [auth] Authorization information. If not using, pass in `null` or `undefined`
 * @param   {string} [auth.secretKey] If using oAuth your app's secret. Must be used with `auth.consumerKey`
 * @param   {string} [auth.consumerKey] If using oAuth, your app's consumer key. Must be used with `auth.secretKey`
 * @param   {string} [auth.sharedSecret] If using shared secrets, your shared secret
 * @param   {Function} cb What to do when it's done!
 * @returns {object} undefined
 */
exports.clicks = function(apikey, opts, auth, cb){
  if(!apikey || typeof apikey !== 'string'){
    throw new Error('You must provide an API key');
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

  if(opts.url && !opts.url.match(/^http(s?):\/\/.*/)){
    throw new Error('urls must start with http:// or https://');
  }

  var query = clean({
    url: opts.url,
    days: opts.days,
    period_start: fixDate(opts.period_start),
    period_end: fixDate(opts.period_end),
    limit: opts.limit,
    page: opts.page
  });

  sendRequest('/clicks', query, auth, cb);
};

/**
 * Retrieve a list of URLs and the corresponding clicks recorded by the API over a period. Docs: [/clicks](http://www.parsely.com/api/api_ref.html#method-clicks)
 * @method  clicks
 * @async
 * @memberOf recommendations
 * @param   {string} apikey The publisher API key
 * @param   {object} [opts] A list of options for the call
 * @param   {string} [opts.days] Number of days since today to consider for _hits value. Defaults to 3.
 * @param   {mixed} [opts.period_start] Period of data to cover. Must supply `opts.period_end` as well
 * @param   {mixed} [opts.period_end] Period of data to cover, cannot be in the future. Must use `opts.period_start` as well.
 * @param   {string} [opts.limit] Number of records to retrieve, detauls to `10`
 * @param   {string} [opts.page] Page number of results set, defaults to `1`
 * @param   {object} [auth] Authorization information. If not using, pass in `null` or `undefined`
 * @param   {string} [auth.secretKey] If using oAuth your app's secret. Must be used with `auth.consumerKey`
 * @param   {string} [auth.consumerKey] If using oAuth, your app's consumer key. Must be used with `auth.secretKey`
 * @param   {string} [auth.sharedSecret] If using shared secrets, your shared secret
 * @param   {Function} cb What to do when it's done!
 * @returns {object} undefined
 */
exports.clicksTotal = function(apikey, opts, auth, cb){
  if(!apikey || typeof apikey !== 'string'){
    throw new Error('You must provide an API key');
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
    days: opts.days,
    period_start: fixDate(opts.period_start),
    period_end: fixDate(opts.period_end),
    limit: opts.limit,
    page: opts.page
  });

  sendRequest('/clicks/total', query, auth, cb);
};

/**
 * Retrieve a list of URLs visited by a user by UUID. Docs: [/history](http://www.parsely.com/api/api_ref.html#method-history).
 * **THIS METHOD'S SIGNATURE DIFFERS FROM THE DOCS SINCE THEY ARE CALLING A UUID `DAYS`**
 * @method  history
 * @param   {string} uuid UUID of person to get history
 * @param   {string} apikey The publisher API key
 * @param   {object} [auth] Authorization information. If not using, pass in `null` or `undefined`
 * @param   {string} [auth.secretKey] If using oAuth your app's secret. Must be used with `auth.consumerKey`
 * @param   {string} [auth.consumerKey] If using oAuth, your app's consumer key. Must be used with `auth.secretKey`
 * @param   {string} [auth.sharedSecret] If using shared secrets, your shared secret
 * @param   {Function} cb What to do when it's done!
 * @returns {object} undefined
 */
exports.history = function(uuid, apikey, auth, cb){
  if(!uuid || typeof uuid !== 'string'){
    throw new Error('You must provide a UUID to look up');
  }

  if(!apikey || typeof apikey !== 'string'){
    throw new Error('You must provide an API key');
  }

  if(typeof auth === 'function'){
    cb = auth;
    auth = {};
  }
  auth = auth || {};

  var query = clean({
    days: uuid,
    apikey: apikey
  });

  sendRequest('/history', query, auth, cb);

};

/**
 * Specify posts to be ranked in the recommendation API. Docs: [/editorial_override](http://www.parsely.com/api/api_ref.html#method-overrides-post)
 * @method  createOverride
 * @param   {string} url URL of the article to re-rank
 * @param   {mixed} [expiry] Date, in `YYYY-MM-DD` to expire ranking (max: 2 weeks)
 * @param   {number} priority The priority you want. `1` is highest...
 * @param   {string} apikey Your publisher API key
 * @param   {object} [auth] Authorization information. If not using, pass in `null` or `undefined`
 * @param   {string} [auth.secretKey] If using oAuth your app's secret. Must be used with `auth.consumerKey`
 * @param   {string} [auth.consumerKey] If using oAuth, your app's consumer key. Must be used with `auth.secretKey`
 * @param   {string} [auth.sharedSecret] If using shared secrets, your shared secret
 * @param   {Function} cb What to do when it's done!
 * @returns {object} undefined
 */
exports.createOverride = function(url, expiry, priority, apikey, auth, cb){
  if(!url || !url.match(/^http(s?):\/\/.*/)){
    throw new Error('url is required and must start with http:// https://');
  }

  // if you omit expiry, shift everything up. this is super gnarly and
  // i probably shouldn't have done this...
  if(typeof expiry === 'number' || (!expiry.match(/\d{4}-\d{2}-\d{2}/) && isNaN((new Date(expiry))))){
    cb = auth;
    auth = apikey;
    apikey = priority;
    priority = expiry;
    expiry = undefined;
  }

  if(typeof priority !== 'number' && isNaN(parseInt(priority, 10))){
    throw new Error('Priority must be specified and a valid number');
  }

  if(!apikey || typeof apikey !== 'string'){
    throw new Error('You must provide an API key');
  }

  if(typeof auth === 'function'){
    cb = auth;
    auth = {};
  }
  auth = auth || {};

  var query = clean({
    url: url,
    expiry: fixDate(expiry),
    priority: priority,
    apikey: apikey
  });

  sendRequest('/editorial_overrides', query, auth, true, cb);
};

/**
 * Retrieve list of URLs that should be given special ranking. Docs: [/editoral_overrides](http://www.parsely.com/api/api_ref.html#method-overrides-get)
 * @method  editorialOverrides
 * @param   {number} [limit] Number of records to retrieve, defaults to 10
 * @param   {number} [page] Page to request
 * @param   {string} apikey publisher's api key
 * @param   {object} [auth] Authorization information. If not using, pass in `null` or `undefined`
 * @param   {string} [auth.secretKey] If using oAuth your app's secret. Must be used with `auth.consumerKey`
 * @param   {string} [auth.consumerKey] If using oAuth, your app's consumer key. Must be used with `auth.secretKey`
 * @param   {string} [auth.sharedSecret] If using shared secrets, your shared secret
 * @param   {Function} cb What to do when it's done!
 * @returns {object} undefined
 */
exports.editorialOverrides = function(limit, page, apikey, auth, cb){
  if(typeof page === 'function'){
    apikey = limit;
    cb = page;
    limit = undefined;
    page = undefined;
  }

  if(typeof apikey === 'function'){
    cb = apikey;
    if(typeof page === 'object'){
      apikey = limit;
      auth = page;
      limit = undefined;
    } else {
      apikey = page;
    }
    auth = {};
    page = undefined;
  }

  if(!apikey || typeof apikey !== 'string'){
    throw new Error('You must provide an API key');
  }

  if(limit && isNaN(parseInt(limit, 10))){
    throw new Error('Limit must be a valid number');
  }

  if(typeof auth === 'function'){
    cb = auth;
    auth = {};
  }
  auth = auth || {};

  var query = clean({
    limit: limit,
    page: page,
    apikey: apikey
  });

  sendRequest('/editorial_overrides', query, auth, cb);
};

