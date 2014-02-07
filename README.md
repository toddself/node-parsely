[![build status](https://secure.travis-ci.org/toddself/node-parsely.png)](http://travis-ci.org/toddself/node-parsely)
# node-parsely

A javascript client for the Parse.ly APIs.

## Installation

`npm install parsely`

## Tracking Events

```javascript

var parsely = require('parsley');

var trackingData = {
  idsite: 'parselyid',
  date: (new Date()),
  data: {
    parsely_site_uuid: 'unique id for client'
  }
};

parsely.track(trackingData, 'Mozilla/6.0', function(err){
  if(err){
    console.log(err);
  }

parsely.analytics.byType('query', 'posts', {days: 1}, {sharedSecret: 'dudes'}, function(err, data){
  if(err){
    console.log(err);
  }
  console.log(data);
  });
});
```

## Development

```
git clone https://github.com/toddself/node-parsely
cd node-parsely
npm install
```

## API

<!-- START docme generated API please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN docme TO UPDATE -->

<div>
<div class="jsdoc-githubify">
<section>
<article>
<div class="container-overview">
<dl class="details">
</dl>
</div>
<dl>
<dt>
<h4 class="name" id="byType"><span class="type-signature"></span>byType<span class="signature">(type, <span class="optional">opts</span>, <span class="optional">auth</span>, cb)</span><span class="type-signature"> &rarr; {object}</span></h4>
</dt>
<dd>
<div class="description">
<p>Returns a list of posts, authors, section topics  or tags depending on
specified type.
<a href="http://www.parsely.com/api/api_ref.html#method-analytics">analytics/{type}</a></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>type</code></td>
<td class="type">
<span class="param-type">string</span>
</td>
<td class="attributes">
</td>
<td class="description last"><p>One of <code>posts</code>, <code>authors</code>, <code>sections</code>, <code>topics</code>, <code>tags</code></p></td>
</tr>
<tr>
<td class="name"><code>opts</code></td>
<td class="type">
<span class="param-type">object</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>A list of options for the call</p>
<h6>Properties</h6>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>days</code></td>
<td class="type">
<span class="param-type">string</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>Number of days since today to consider for _hits value. Defaults to 3.</p></td>
</tr>
<tr>
<td class="name"><code>period_start</code></td>
<td class="type">
<span class="param-type">mixed</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>Period of data to cover. Must supply <code>opts.period_end</code> as well</p></td>
</tr>
<tr>
<td class="name"><code>period_end</code></td>
<td class="type">
<span class="param-type">mixed</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>Period of data to cover, cannot be in the future. Must use <code>opts.period_start</code> as well.</p></td>
</tr>
<tr>
<td class="name"><code>pub_date_state</code></td>
<td class="type">
<span class="param-type">mixed</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>Start date of content publication to consider. Must use <code>opts.pub_date_end</code> as well.</p></td>
</tr>
<tr>
<td class="name"><code>pub_date_end</code></td>
<td class="type">
<span class="param-type">mixed</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>End date of content publication to consider. Must use <code>opts.pub_date_start</code> as well.</p></td>
</tr>
<tr>
<td class="name"><code>sort</code></td>
<td class="type">
<span class="param-type">string</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>Sort value. Defaults to <code>_hits</code></p></td>
</tr>
<tr>
<td class="name"><code>limit</code></td>
<td class="type">
<span class="param-type">string</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>Number of records to retrieve, detauls to <code>10</code></p></td>
</tr>
<tr>
<td class="name"><code>page</code></td>
<td class="type">
<span class="param-type">string</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>Page number of results set, defaults to <code>1</code></p></td>
</tr>
</tbody>
</table>
</td>
</tr>
<tr>
<td class="name"><code>auth</code></td>
<td class="type">
<span class="param-type">object</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>Authorization information. If not using, pass in <code>null</code> or <code>undefined</code></p>
<h6>Properties</h6>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>secretKey</code></td>
<td class="type">
<span class="param-type">string</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>If using oAuth your app's secret. Must be used with <code>auth.consumerKey</code></p></td>
</tr>
<tr>
<td class="name"><code>consumerKey</code></td>
<td class="type">
<span class="param-type">string</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>If using oAuth, your app's consumer key. Must be used with <code>auth.secretKey</code></p></td>
</tr>
<tr>
<td class="name"><code>sharedSecret</code></td>
<td class="type">
<span class="param-type">string</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>If using shared secrets, your shared secret</p></td>
</tr>
</tbody>
</table>
</td>
</tr>
<tr>
<td class="name"><code>cb</code></td>
<td class="type">
<span class="param-type">function</span>
</td>
<td class="attributes">
</td>
<td class="description last"><p>What to do when it's done!</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/toddself/node-parsely/blob/master/analytics.js">analytics.js</a>
<span>, </span>
<a href="https://github.com/toddself/node-parsely/blob/master/analytics.js#L9">lineno 9</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>undefined</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">object</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="metaValueDetail"><span class="type-signature"></span>metaValueDetail<span class="signature">(meta, value, <span class="optional">opts</span>, <span class="optional">auth</span>)</span><span class="type-signature"> &rarr; {object}</span></h4>
</dt>
<dd>
<div class="description">
<p>Returns a list of posts falling under the specified author, section or topic.
<a href="http://www.parsely.com/api/api_ref.html#method-analytics-detail">/analaytics/{meta}/{value}/detail</a></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>meta</code></td>
<td class="type">
<span class="param-type">string</span>
</td>
<td class="attributes">
</td>
<td class="description last"><p>What values to return. Must be one of <code>author</code>, <code>section</code>, <code>topic</code>, <code>tag</code></p></td>
</tr>
<tr>
<td class="name"><code>value</code></td>
<td class="type">
<span class="param-type">string</span>
</td>
<td class="attributes">
</td>
<td class="description last"><p>Search term for query</p></td>
</tr>
<tr>
<td class="name"><code>opts</code></td>
<td class="type">
<span class="param-type">object</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>A list of options for the call</p>
<h6>Properties</h6>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>days</code></td>
<td class="type">
<span class="param-type">string</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>Number of days since today to consider for _hits value. Defaults to 3.</p></td>
</tr>
<tr>
<td class="name"><code>period_start</code></td>
<td class="type">
<span class="param-type">mixed</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>Period of data to cover. Must supply <code>opts.period_end</code> as well</p></td>
</tr>
<tr>
<td class="name"><code>period_end</code></td>
<td class="type">
<span class="param-type">mixed</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>Period of data to cover, cannot be in the future. Must use <code>opts.period_start</code> as well.</p></td>
</tr>
<tr>
<td class="name"><code>pub_date_state</code></td>
<td class="type">
<span class="param-type">mixed</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>Start date of content publication to consider. Must use <code>opts.pub_date_end</code> as well.</p></td>
</tr>
<tr>
<td class="name"><code>pub_date_end</code></td>
<td class="type">
<span class="param-type">mixed</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>End date of content publication to consider. Must use <code>opts.pub_date_start</code> as well.</p></td>
</tr>
<tr>
<td class="name"><code>sort</code></td>
<td class="type">
<span class="param-type">string</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>Sort value. Defaults to <code>_hits</code></p></td>
</tr>
<tr>
<td class="name"><code>limit</code></td>
<td class="type">
<span class="param-type">string</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>Number of records to retrieve, detauls to <code>10</code></p></td>
</tr>
<tr>
<td class="name"><code>page</code></td>
<td class="type">
<span class="param-type">string</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>Page number of results set, defaults to <code>1</code></p></td>
</tr>
</tbody>
</table>
</td>
</tr>
<tr>
<td class="name"><code>auth</code></td>
<td class="type">
<span class="param-type">object</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>Authorization information. If not using, pass in <code>null</code> or <code>undefined</code></p>
<h6>Properties</h6>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>secretKey</code></td>
<td class="type">
<span class="param-type">string</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>If using oAuth your app's secret. Must be used with <code>auth.consumerKey</code></p></td>
</tr>
<tr>
<td class="name"><code>consumerKey</code></td>
<td class="type">
<span class="param-type">string</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>If using oAuth, your app's consumer key. Must be used with <code>auth.secretKey</code></p></td>
</tr>
<tr>
<td class="name"><code>sharedSecret</code></td>
<td class="type">
<span class="param-type">string</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>If using shared secrets, your shared secret* @param   {Function} cb [description]</p></td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/toddself/node-parsely/blob/master/analytics.js">analytics.js</a>
<span>, </span>
<a href="https://github.com/toddself/node-parsely/blob/master/analytics.js#L111">lineno 111</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>undefined</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">object</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="postDetail"><span class="type-signature"></span>postDetail<span class="signature">(url, <span class="optional">opts</span>, <span class="optional">auth</span>, cb)</span><span class="type-signature"> &rarr; {object}</span></h4>
</dt>
<dd>
<div class="description">
<p>Returns the metadata and total pageviews for a post specified by URL.
<a href="http://www.parsely.com/api/api_ref.html#method-analytics-post-detail">post detail documentation</a></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>url</code></td>
<td class="type">
<span class="param-type">string</span>
</td>
<td class="attributes">
</td>
<td class="description last"><p>Canonical URL for asset. Must start with http/s</p></td>
</tr>
<tr>
<td class="name"><code>opts</code></td>
<td class="type">
<span class="param-type">object</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>A list of options for the call</p>
<h6>Properties</h6>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>days</code></td>
<td class="type">
<span class="param-type">string</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>Number of days since today to consider for _hits value. Defaults to 3.</p></td>
</tr>
</tbody>
</table>
</td>
</tr>
<tr>
<td class="name"><code>auth</code></td>
<td class="type">
<span class="param-type">object</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>Authorization information. If not using, pass in <code>null</code> or <code>undefined</code></p>
<h6>Properties</h6>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>secretKey</code></td>
<td class="type">
<span class="param-type">string</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>If using oAuth your app's secret. Must be used with <code>auth.consumerKey</code></p></td>
</tr>
<tr>
<td class="name"><code>consumerKey</code></td>
<td class="type">
<span class="param-type">string</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>If using oAuth, your app's consumer key. Must be used with <code>auth.secretKey</code></p></td>
</tr>
<tr>
<td class="name"><code>sharedSecret</code></td>
<td class="type">
<span class="param-type">string</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>If using shared secrets, your shared secret</p></td>
</tr>
</tbody>
</table>
</td>
</tr>
<tr>
<td class="name"><code>cb</code></td>
<td class="type">
<span class="param-type">function</span>
</td>
<td class="attributes">
</td>
<td class="description last"><p>What to do when it's done</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/toddself/node-parsely/blob/master/analytics.js">analytics.js</a>
<span>, </span>
<a href="https://github.com/toddself/node-parsely/blob/master/analytics.js#L68">lineno 68</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>undefined</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">object</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="track"><span class="type-signature"></span>track<span class="signature">(params, <span class="optional">user_agent</span>, <span class="optional">cb</span>)</span><span class="type-signature"> &rarr; {object}</span></h4>
</dt>
<dd>
<div class="description">
<p>Sends a tracking request to pixel.parsel.com</p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>params</code></td>
<td class="type">
<span class="param-type">object</span>
</td>
<td class="attributes">
</td>
<td class="description last"><p>map of values from <a href="http://parsely.com/api/data_insertion_api.html">data insertion api</a></p>
<h6>Properties</h6>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>idsite</code></td>
<td class="type">
<span class="param-type">string</span>
</td>
<td class="description last"><p>site ID assigned by parsely</p></td>
</tr>
<tr>
<td class="name"><code>[date]</code></td>
<td class="type">
<span class="param-type">date</span>
</td>
<td class="description last"><p>time/date of request.</p></td>
</tr>
<tr>
<td class="name"><code>ip_address</code></td>
<td class="type">
<span class="param-type">string</span>
</td>
<td class="description last"><p>IP Address of person performing action</p></td>
</tr>
<tr>
<td class="name"><code>url</code></td>
<td class="type">
<span class="param-type">string</span>
</td>
<td class="description last"><p>URL of page action was taken on</p></td>
</tr>
<tr>
<td class="name"><code>urlref</code></td>
<td class="type">
<span class="param-type">string</span>
</td>
<td class="description last"><p>Referrer</p></td>
</tr>
<tr>
<td class="name"><code>screen</code></td>
<td class="type">
<span class="param-type">string</span>
</td>
<td class="description last"><p>Screen dimensions: Monitor width x height|Browser width x height|color-depth: 1024x758|900x600|24</p></td>
</tr>
<tr>
<td class="name"><code>title</code></td>
<td class="type">
<span class="param-type">string</span>
</td>
<td class="description last"><p>Title of the document</p></td>
</tr>
<tr>
<td class="name"><code>action</code></td>
<td class="type">
<span class="param-type">string</span>
</td>
<td class="description last"><p>Type of request (pageview)</p></td>
</tr>
<tr>
<td class="name"><code>body</code></td>
<td class="type">
<span class="param-type">object</span>
</td>
<td class="description last"><p>user data about user being tracked</p>
<h6>Properties</h6>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>parsely_site_uuid</code></td>
<td class="type">
<span class="param-type">sting</span>
</td>
<td class="description last"><p>Unique identifier for user</p></td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
<tr>
<td class="name"><code>user_agent</code></td>
<td class="type">
<span class="param-type">string</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>User-Agent of browser being used</p></td>
</tr>
<tr>
<td class="name"><code>cb</code></td>
<td class="type">
<span class="param-type">function</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>callback to fire when request is complete</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/toddself/node-parsely/blob/master/track.js">track.js</a>
<span>, </span>
<a href="https://github.com/toddself/node-parsely/blob/master/track.js#L24">lineno 24</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>undefined</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">object</span>
</dd>
</dl>
</dd>
</dl>
</article>
</section>
</div>

*generated with [docme](https://github.com/thlorenz/docme)*
</div>
<!-- END docme generated API please keep comment here to allow auto update -->

## License

node-parsely copyright 2013 Todd Kennedy.  MIT Licensed.
