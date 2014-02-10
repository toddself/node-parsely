'use strict';

/**
 * @namespace search
 */

var sendRequest = require('./lib/request');
var clean = require('./lib/clean-obj');
var fixDate = require('./lib/fix-date');

/**
 * Search for Posts by keyword or query. Docs: [/search](http://www.parsely.com/api/api_ref.html#method-search)
 * @method  search
 * @async
 * @memberOf search
 * @param   {string} q Search query. Will be properly escaped
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
exports.search = function(q, apikey, opts, auth, cb){
  var allowedClickMethods = ['ref_social', 'ref_search', 'ref_internal'];
  if(!q || typeof q !== 'string'){
    throw new Error('You must provide a search query');
  }

  if(!apikey || typeof apikey !== 'string'){
    throw new Error('You must provide an api key');
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
    q: q,
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

  sendRequest('/search', query, auth, cb);
};