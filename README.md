[![build status](https://secure.travis-ci.org/toddself/node-parsely.png)](http://travis-ci.org/toddself/node-parsely)
# node-parsely

A javascript client for the Parse.ly APIs.

## Installation

`npm install parsely`

## Documentation
This is a very light wrapper around the [parsely.com API](http://www.parsely.com/api), providing the same options as the API docs there.  The [wiki](/toddself/node-parsely/wiki/) has a full set of API docs, where you can see what method corresponds to which API, and a list of the parameters they take.

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
});
```

## Analytics
```javascript
parsely.analytics.byType('query', 'posts', {days: 1}, {sharedSecret: 'dudes'}, function(err, data){
  if(err){
    console.log(err);
  }
  console.log(data);
});
```

##

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
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/toddself/node-parsely/blob/master/analytics.js">analytics.js</a>
<span>, </span>
<a href="https://github.com/toddself/node-parsely/blob/master/analytics.js#L3">lineno 3</a>
</li>
</ul></dd>
</dl>
</div>
<dl>
<dt>
<h4 class="name" id="byType"><span class="type-signature">&lt;static> </span>byType<span class="signature">(type, <span class="optional">opts</span>, <span class="optional">auth</span>, cb)</span><span class="type-signature"> &rarr; {object}</span></h4>
</dt>
<dd>
<div class="description">
<p>Returns a list of posts, authors, section topics  or tags depending on
specified type.
Docs: <a href="http://www.parsely.com/api/api_ref.html#method-analytics">analytics/{type}</a></p>
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
<a href="https://github.com/toddself/node-parsely/blob/master/analytics.js#L11">lineno 11</a>
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
<h4 class="name" id="metaValueDetail"><span class="type-signature">&lt;static> </span>metaValueDetail<span class="signature">(meta, value, <span class="optional">opts</span>, <span class="optional">auth</span>)</span><span class="type-signature"> &rarr; {object}</span></h4>
</dt>
<dd>
<div class="description">
<p>Returns a list of posts falling under the specified author, section or topic.
Docs: <a href="http://www.parsely.com/api/api_ref.html#method-analytics-detail">/analaytics/{meta}/{value}/detail</a></p>
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
<a href="https://github.com/toddself/node-parsely/blob/master/analytics.js#L113">lineno 113</a>
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
<h4 class="name" id="postDetail"><span class="type-signature">&lt;static> </span>postDetail<span class="signature">(url, <span class="optional">opts</span>, <span class="optional">auth</span>, cb)</span><span class="type-signature"> &rarr; {object}</span></h4>
</dt>
<dd>
<div class="description">
<p>Returns the metadata and total pageviews for a post specified by URL.
Docs:  <a href="http://www.parsely.com/api/api_ref.html#method-analytics-post-detail">/analytics/post/detail</a></p>
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
<a href="https://github.com/toddself/node-parsely/blob/master/analytics.js#L70">lineno 70</a>
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
</div><div class="jsdoc-githubify">
<section>
<article>
<div class="container-overview">
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/toddself/node-parsely/blob/master/recommendations.js">recommendations.js</a>
<span>, </span>
<a href="https://github.com/toddself/node-parsely/blob/master/recommendations.js#L3">lineno 3</a>
</li>
</ul></dd>
</dl>
</div>
<dl>
<dt>
<h4 class="name" id="clicks"><span class="type-signature">&lt;static> </span>clicks<span class="signature">(apikey, <span class="optional">opts</span>, <span class="optional">auth</span>, cb)</span><span class="type-signature"> &rarr; {object}</span></h4>
</dt>
<dd>
<div class="description">
<p>Retrieve a list of URLs and the corresponding clicks recorded by the API over a period. Docs: <a href="http://www.parsely.com/api/api_ref.html#method-clicks">/clicks</a></p>
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
<td class="name"><code>apikey</code></td>
<td class="type">
<span class="param-type">string</span>
</td>
<td class="attributes">
</td>
<td class="description last"><p>The publisher API key</p></td>
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
<td class="name"><code>url</code></td>
<td class="type">
<span class="param-type">string</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>Restrict the listing to a specified URL</p></td>
</tr>
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
<a href="https://github.com/toddself/node-parsely/blob/master/recommendations.js">recommendations.js</a>
<span>, </span>
<a href="https://github.com/toddself/node-parsely/blob/master/recommendations.js#L141">lineno 141</a>
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
<h4 class="name" id="clicks"><span class="type-signature">&lt;static> </span>clicks<span class="signature">(apikey, <span class="optional">opts</span>, <span class="optional">auth</span>, cb)</span><span class="type-signature"> &rarr; {object}</span></h4>
</dt>
<dd>
<div class="description">
<p>Retrieve a list of URLs and the corresponding clicks recorded by the API over a period. Docs: <a href="http://www.parsely.com/api/api_ref.html#method-clicks">/clicks</a></p>
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
<td class="name"><code>apikey</code></td>
<td class="type">
<span class="param-type">string</span>
</td>
<td class="attributes">
</td>
<td class="description last"><p>The publisher API key</p></td>
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
<a href="https://github.com/toddself/node-parsely/blob/master/recommendations.js">recommendations.js</a>
<span>, </span>
<a href="https://github.com/toddself/node-parsely/blob/master/recommendations.js#L195">lineno 195</a>
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
<h4 class="name" id="createOverride"><span class="type-signature">&lt;static> </span>createOverride<span class="signature">(url, <span class="optional">expiry</span>, priority, apikey, <span class="optional">auth</span>, cb)</span><span class="type-signature"> &rarr; {object}</span></h4>
</dt>
<dd>
<div class="description">
<p>Specify posts to be ranked in the recommendation API. Docs: <a href="http://www.parsely.com/api/api_ref.html#method-overrides-post">/editorial_override</a></p>
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
<td class="description last"><p>URL of the article to re-rank</p></td>
</tr>
<tr>
<td class="name"><code>expiry</code></td>
<td class="type">
<span class="param-type">mixed</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>Date, in <code>YYYY-MM-DD</code> to expire ranking (max: 2 weeks)</p></td>
</tr>
<tr>
<td class="name"><code>priority</code></td>
<td class="type">
<span class="param-type">number</span>
</td>
<td class="attributes">
</td>
<td class="description last"><p>The priority you want. <code>1</code> is highest...</p></td>
</tr>
<tr>
<td class="name"><code>apikey</code></td>
<td class="type">
<span class="param-type">string</span>
</td>
<td class="attributes">
</td>
<td class="description last"><p>Your publisher API key</p></td>
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
<a href="https://github.com/toddself/node-parsely/blob/master/recommendations.js">recommendations.js</a>
<span>, </span>
<a href="https://github.com/toddself/node-parsely/blob/master/recommendations.js#L282">lineno 282</a>
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
<h4 class="name" id="editorialOverrides"><span class="type-signature">&lt;static> </span>editorialOverrides<span class="signature">(<span class="optional">limit</span>, <span class="optional">page</span>, apikey, <span class="optional">auth</span>, cb)</span><span class="type-signature"> &rarr; {object}</span></h4>
</dt>
<dd>
<div class="description">
<p>Retrieve list of URLs that should be given special ranking. Docs: <a href="http://www.parsely.com/api/api_ref.html#method-overrides-get">/editoral_overrides</a></p>
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
<td class="name"><code>limit</code></td>
<td class="type">
<span class="param-type">number</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>Number of records to retrieve, defaults to 10</p></td>
</tr>
<tr>
<td class="name"><code>page</code></td>
<td class="type">
<span class="param-type">number</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>Page to request</p></td>
</tr>
<tr>
<td class="name"><code>apikey</code></td>
<td class="type">
<span class="param-type">string</span>
</td>
<td class="attributes">
</td>
<td class="description last"><p>publisher's api key</p></td>
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
<a href="https://github.com/toddself/node-parsely/blob/master/recommendations.js">recommendations.js</a>
<span>, </span>
<a href="https://github.com/toddself/node-parsely/blob/master/recommendations.js#L337">lineno 337</a>
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
<h4 class="name" id="history"><span class="type-signature">&lt;static> </span>history<span class="signature">(uuid, apikey, <span class="optional">auth</span>, cb)</span><span class="type-signature"> &rarr; {object}</span></h4>
</dt>
<dd>
<div class="description">
<p>Retrieve a list of URLs visited by a user by UUID. Docs: <a href="http://www.parsely.com/api/api_ref.html#method-history">/history</a>.
<strong>THIS METHOD'S SIGNATURE DIFFERS FROM THE DOCS SINCE THEY ARE CALLING A UUID <code>DAYS</code></strong></p>
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
<td class="name"><code>uuid</code></td>
<td class="type">
<span class="param-type">string</span>
</td>
<td class="attributes">
</td>
<td class="description last"><p>UUID of person to get history</p></td>
</tr>
<tr>
<td class="name"><code>apikey</code></td>
<td class="type">
<span class="param-type">string</span>
</td>
<td class="attributes">
</td>
<td class="description last"><p>The publisher API key</p></td>
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
<a href="https://github.com/toddself/node-parsely/blob/master/recommendations.js">recommendations.js</a>
<span>, </span>
<a href="https://github.com/toddself/node-parsely/blob/master/recommendations.js#L243">lineno 243</a>
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
<h4 class="name" id="profile"><span class="type-signature">&lt;static> </span>profile<span class="signature">(uuid, url, apikey, <span class="optional">auth</span>, cb)</span><span class="type-signature"> &rarr; {object}</span></h4>
</dt>
<dd>
<div class="description">
<p>Train a user profile for the purpose of personalized recommendations. Docs: <a href="http://www.parsely.com/api/api_ref.html#method-profile">/profile</a></p>
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
<td class="name"><code>uuid</code></td>
<td class="type">
<span class="param-type">string</span>
</td>
<td class="attributes">
</td>
<td class="description last"><p>UUID for the user profile being trained</p></td>
</tr>
<tr>
<td class="name"><code>url</code></td>
<td class="type">
<span class="param-type">url</span>
</td>
<td class="attributes">
</td>
<td class="description last"><p>The URL being trained against the profile</p></td>
</tr>
<tr>
<td class="name"><code>apikey</code></td>
<td class="type">
<span class="param-type">string</span>
</td>
<td class="attributes">
</td>
<td class="description last"><p>Publisher API key</p></td>
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
<td class="description last"><p>What to do with the results</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/toddself/node-parsely/blob/master/recommendations.js">recommendations.js</a>
<span>, </span>
<a href="https://github.com/toddself/node-parsely/blob/master/recommendations.js#L11">lineno 11</a>
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
<h4 class="name" id="related"><span class="type-signature">&lt;static> </span>related<span class="signature">(type, criteria, apikey, <span class="optional">opts</span>, <span class="optional">auth</span>, cb)</span><span class="type-signature"> &rarr; {object}</span></h4>
</dt>
<dd>
<div class="description">
<p>Retrieve a list of post recommendations which are either personalized or for
a specific URL. Docs: <a href="http://www.parsely.com/api/api_ref.html#method-related">/related</a></p>
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
<td class="description last"><p>Recommend by <code>uuid</code> or <code>url</code></p></td>
</tr>
<tr>
<td class="name"><code>criteria</code></td>
<td class="type">
<span class="param-type">string</span>
</td>
<td class="attributes">
</td>
<td class="description last"><p>Either the UUID or URL to retrieve recommendations for</p></td>
</tr>
<tr>
<td class="name"><code>apikey</code></td>
<td class="type">
<span class="param-type">string</span>
</td>
<td class="attributes">
</td>
<td class="description last"><p>The publisher API key</p></td>
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
<tr>
<td class="name"><code>section</code></td>
<td class="type">
<span class="param-type">string</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>Return recommendations that belong only in the specified section</p></td>
</tr>
<tr>
<td class="name"><code>author</code></td>
<td class="type">
<span class="param-type">string</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>Return recommendations that belong only to the specified author</p></td>
</tr>
<tr>
<td class="name"><code>tag</code></td>
<td class="type">
<span class="param-type">string</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>Return recommendations that belong only to the specified tag</p></td>
</tr>
<tr>
<td class="name"><code>strategy</code></td>
<td class="type">
<span class="param-type">string</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>Algorithm to use for search. One of <code>click</code> or <code>recency</code>. Defaults to <code>recency</code></p></td>
</tr>
<tr>
<td class="name"><code>clickMethod</code></td>
<td class="type">
<span class="param-type">string</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>What click method to use for when <code>opts.strategy</code> is <code>click</code>. One of <code>ref_social</code>, <code>ref_search</code>, <code>ref_internal</code></p></td>
</tr>
<tr>
<td class="name"><code>sort</code></td>
<td class="type">
<span class="param-type">string</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>What to sort the results by. There are currently 2 valid options: <code>score</code>, which will sort articles by overall score and <code>pub_date</code> which will sort results by their publication date. The default is <code>score</code>.</p></td>
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
<a href="https://github.com/toddself/node-parsely/blob/master/recommendations.js">recommendations.js</a>
<span>, </span>
<a href="https://github.com/toddself/node-parsely/blob/master/recommendations.js#L55">lineno 55</a>
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
</div><div class="jsdoc-githubify">
<section>
<article>
<div class="container-overview">
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/toddself/node-parsely/blob/master/referrers.js">referrers.js</a>
<span>, </span>
<a href="https://github.com/toddself/node-parsely/blob/master/referrers.js#L3">lineno 3</a>
</li>
</ul></dd>
</dl>
</div>
<dl>
<dt>
<h4 class="name" id="byType"><span class="type-signature">&lt;static> </span>byType<span class="signature">(type, apikey, <span class="optional">opts</span>, <span class="optional">auth</span>, cb)</span><span class="type-signature"> &rarr; {object}</span></h4>
</dt>
<dd>
<div class="description">
<p>Return a list of top referrers by type. Docs: <a href="http://www.parsely.com/api/api_ref.html#method-referrer">/referrers/{type}</a></p>
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
<td class="description last"><p>One of <code>social</code>, <code>search</code>, <code>other</code>, <code>internal</code></p></td>
</tr>
<tr>
<td class="name"><code>apikey</code></td>
<td class="type">
<span class="param-type">string</span>
</td>
<td class="attributes">
</td>
<td class="description last"><p>Your parsley API key</p></td>
</tr>
<tr>
<td class="name"><code>opts</code></td>
<td class="type">
<span class="param-type">object</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>Options for the call.</p>
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
<td class="name"><code>section</code></td>
<td class="type">
<span class="param-type">string</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>Section to restrict this query to.</p></td>
</tr>
<tr>
<td class="name"><code>tag</code></td>
<td class="type">
<span class="param-type">string</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>Tag to restrict this query to.</p></td>
</tr>
<tr>
<td class="name"><code>domain</code></td>
<td class="type">
<span class="param-type">string</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>domain to restrict this query to.</p></td>
</tr>
<tr>
<td class="name"><code>days</code></td>
<td class="type">
<span class="param-type">number</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>Number of days since today to consider; defaults to 3 days. Use <code>days=14</code> or <code>days=30</code> to only consider traffic from last several days.</p></td>
</tr>
<tr>
<td class="name"><code>period_start</code></td>
<td class="type">
<span class="param-type">mixed</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>Period of data to cover. Must be specified with <code>period_end</code>.</p></td>
</tr>
<tr>
<td class="name"><code>period_end</code></td>
<td class="type">
<span class="param-type">mixed</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>Period of data to cover; must be specified with p<code>eriod_start</code>, must be greater than that value, and must not be in the future.</p></td>
</tr>
<tr>
<td class="name"><code>pub_date_start</code></td>
<td class="type">
<span class="param-type">mixed</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>Publication date. Must be specified with <code>pub_date_end</code>.</p></td>
</tr>
<tr>
<td class="name"><code>pub_date_end</code></td>
<td class="type">
<span class="param-type">mixed</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>Publication end date; must be specified with <code>pub_date_start</code>, must be greater than that value, and must not be in the future.</p></td>
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
<td class="description last"><p>What to do with the results</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/toddself/node-parsely/blob/master/referrers.js">referrers.js</a>
<span>, </span>
<a href="https://github.com/toddself/node-parsely/blob/master/referrers.js#L11">lineno 11</a>
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
<h4 class="name" id="byTypeMetaType"><span class="type-signature">&lt;static> </span>byTypeMetaType<span class="signature">(type, meta, apikey, <span class="optional">opts</span>, <span class="optional">auth</span>, cb)</span><span class="type-signature"> &rarr; {object}</span></h4>
</dt>
<dd>
<div class="description">
<p>Return a list of the top posts, authors, sections or topics referred to. Docs: <a href="http://www.parsely.com/api/api_ref.html#method-referrer-meta">/referrers/{referrer_type}/{meta_type}</a></p>
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
<td class="description last"><p>One of <code>social</code>, <code>search</code>, <code>other</code>, <code>internal</code></p></td>
</tr>
<tr>
<td class="name"><code>meta</code></td>
<td class="type">
<span class="param-type">string</span>
</td>
<td class="attributes">
</td>
<td class="description last"><p>One of <code>posts</code>, <code>authors</code>, <code>sections,</code>topics, <code>tags</code></p></td>
</tr>
<tr>
<td class="name"><code>apikey</code></td>
<td class="type">
<span class="param-type">string</span>
</td>
<td class="attributes">
</td>
<td class="description last"><p>Your parsley API key</p></td>
</tr>
<tr>
<td class="name"><code>opts</code></td>
<td class="type">
<span class="param-type">object</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>Options for the call.</p>
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
<td class="name"><code>section</code></td>
<td class="type">
<span class="param-type">string</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>Section to restrict this query to.</p></td>
</tr>
<tr>
<td class="name"><code>tag</code></td>
<td class="type">
<span class="param-type">string</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>Tag to restrict this query to.</p></td>
</tr>
<tr>
<td class="name"><code>domain</code></td>
<td class="type">
<span class="param-type">string</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>domain to restrict this query to.</p></td>
</tr>
<tr>
<td class="name"><code>days</code></td>
<td class="type">
<span class="param-type">number</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>Number of days since today to consider; defaults to 3 days. Use <code>days=14</code> or <code>days=30</code> to only consider traffic from last several days.</p></td>
</tr>
<tr>
<td class="name"><code>period_start</code></td>
<td class="type">
<span class="param-type">mixed</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>Period of data to cover. Must be specified with <code>period_end</code>.</p></td>
</tr>
<tr>
<td class="name"><code>period_end</code></td>
<td class="type">
<span class="param-type">mixed</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>Period of data to cover; must be specified with p<code>eriod_start</code>, must be greater than that value, and must not be in the future.</p></td>
</tr>
<tr>
<td class="name"><code>pub_date_start</code></td>
<td class="type">
<span class="param-type">mixed</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>Publication date. Must be specified with <code>pub_date_end</code>.</p></td>
</tr>
<tr>
<td class="name"><code>pub_date_end</code></td>
<td class="type">
<span class="param-type">mixed</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>Publication end date; must be specified with <code>pub_date_start</code>, must be greater than that value, and must not be in the future.</p></td>
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
<td class="description last"><p>What to do with the results</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/toddself/node-parsely/blob/master/referrers.js">referrers.js</a>
<span>, </span>
<a href="https://github.com/toddself/node-parsely/blob/master/referrers.js#L73">lineno 73</a>
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
<h4 class="name" id="metaValueDetail"><span class="type-signature">&lt;static> </span>metaValueDetail<span class="signature">(type, meta, value, apikey, <span class="optional">opts</span>, <span class="optional">auth</span>, cb)</span><span class="type-signature"> &rarr; {object}</span></h4>
</dt>
<dd>
<div class="description">
<p>Returns a list of posts falling under the specified author, section or topic. Docs: <a href="http://www.parsely.com/api/api_ref.html#method-referrer-meta-value">/referrers/{referrer_type}/{meta_type}/{meta_value}/detail</a></p>
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
<td class="description last"><p>One of <code>social</code>, <code>search</code>, <code>other</code>, <code>internal</code></p></td>
</tr>
<tr>
<td class="name"><code>meta</code></td>
<td class="type">
<span class="param-type">string</span>
</td>
<td class="attributes">
</td>
<td class="description last"><p>One of <code>posts</code>, <code>authors</code>, <code>sections,</code>topics, <code>tags</code></p></td>
</tr>
<tr>
<td class="name"><code>value</code></td>
<td class="type">
<span class="param-type">string</span>
</td>
<td class="attributes">
</td>
<td class="description last"><p>The value for this meta type</p></td>
</tr>
<tr>
<td class="name"><code>apikey</code></td>
<td class="type">
<span class="param-type">string</span>
</td>
<td class="attributes">
</td>
<td class="description last"><p>Your parsley API key</p></td>
</tr>
<tr>
<td class="name"><code>opts</code></td>
<td class="type">
<span class="param-type">object</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>Options for the call.</p>
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
<td class="name"><code>tag</code></td>
<td class="type">
<span class="param-type">string</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>Tag to restrict this query to.</p></td>
</tr>
<tr>
<td class="name"><code>domain</code></td>
<td class="type">
<span class="param-type">string</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>domain to restrict this query to.</p></td>
</tr>
<tr>
<td class="name"><code>days</code></td>
<td class="type">
<span class="param-type">number</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>Number of days since today to consider; defaults to 3 days. Use <code>days=14</code> or <code>days=30</code> to only consider traffic from last several days.</p></td>
</tr>
<tr>
<td class="name"><code>period_start</code></td>
<td class="type">
<span class="param-type">mixed</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>Period of data to cover. Must be specified with <code>period_end</code>.</p></td>
</tr>
<tr>
<td class="name"><code>period_end</code></td>
<td class="type">
<span class="param-type">mixed</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>Period of data to cover; must be specified with p<code>eriod_start</code>, must be greater than that value, and must not be in the future.</p></td>
</tr>
<tr>
<td class="name"><code>pub_date_start</code></td>
<td class="type">
<span class="param-type">mixed</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>Publication date. Must be specified with <code>pub_date_end</code>.</p></td>
</tr>
<tr>
<td class="name"><code>pub_date_end</code></td>
<td class="type">
<span class="param-type">mixed</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>Publication end date; must be specified with <code>pub_date_start</code>, must be greater than that value, and must not be in the future.</p></td>
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
<td class="description last"><p>What to do with the results</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/toddself/node-parsely/blob/master/referrers.js">referrers.js</a>
<span>, </span>
<a href="https://github.com/toddself/node-parsely/blob/master/referrers.js#L140">lineno 140</a>
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
<h4 class="name" id="postDetail"><span class="type-signature">&lt;static> </span>postDetail<span class="signature">(url, apikey, <span class="optional">opts</span>, <span class="optional">auth</span>, cb)</span><span class="type-signature"> &rarr; {object}</span></h4>
</dt>
<dd>
<div class="description">
<p>Return a list of the top referrers for a given URL. Docs: <a href="http://www.parsely.com/api/api_ref.html#method-referrer-url">/referrers/post/detail</a></p>
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
<td class="description last"><p>URL to get details on. Must start with http|https</p></td>
</tr>
<tr>
<td class="name"><code>apikey</code></td>
<td class="type">
<span class="param-type">string</span>
</td>
<td class="attributes">
</td>
<td class="description last"><p>The publisher API key</p></td>
</tr>
<tr>
<td class="name"><code>opts</code></td>
<td class="type">
<span class="param-type">object</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>Options for the call</p>
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
<span class="param-type">number</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>Number of days since today to consider; defaults to 3 days. Use <code>days=14</code> or <code>days=30</code> to only consider traffic from last several days.</p></td>
</tr>
<tr>
<td class="name"><code>period_start</code></td>
<td class="type">
<span class="param-type">mixed</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>Period of data to cover. Must be specified with <code>period_end</code>.</p></td>
</tr>
<tr>
<td class="name"><code>period_end</code></td>
<td class="type">
<span class="param-type">mixed</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>Period of data to cover; must be specified with p<code>eriod_start</code>, must be greater than that value, and must not be in the future.</p></td>
</tr>
<tr>
<td class="name"><code>pub_date_start</code></td>
<td class="type">
<span class="param-type">mixed</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>Publication date. Must be specified with <code>pub_date_end</code>.</p></td>
</tr>
<tr>
<td class="name"><code>pub_date_end</code></td>
<td class="type">
<span class="param-type">mixed</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>Publication end date; must be specified with <code>pub_date_start</code>, must be greater than that value, and must not be in the future.</p></td>
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
<td class="description last"><p>What to do with the results</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/toddself/node-parsely/blob/master/referrers.js">referrers.js</a>
<span>, </span>
<a href="https://github.com/toddself/node-parsely/blob/master/referrers.js#L211">lineno 211</a>
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
</div><div class="jsdoc-githubify">
<section>
<article>
<div class="container-overview">
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/toddself/node-parsely/blob/master/search.js">search.js</a>
<span>, </span>
<a href="https://github.com/toddself/node-parsely/blob/master/search.js#L3">lineno 3</a>
</li>
</ul></dd>
</dl>
</div>
<dl>
<dt>
<h4 class="name" id="search"><span class="type-signature">&lt;static> </span>search<span class="signature">(q, <span class="optional">opts</span>, <span class="optional">auth</span>, cb)</span><span class="type-signature"> &rarr; {object}</span></h4>
</dt>
<dd>
<div class="description">
<p>Search for Posts by keyword or query. Docs: <a href="http://www.parsely.com/api/api_ref.html#method-search">/search</a></p>
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
<td class="name"><code>q</code></td>
<td class="type">
<span class="param-type">string</span>
</td>
<td class="attributes">
</td>
<td class="description last"><p>Search query. Will be properly escaped</p></td>
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
<tr>
<td class="name"><code>section</code></td>
<td class="type">
<span class="param-type">string</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>Return recommendations that belong only in the specified section</p></td>
</tr>
<tr>
<td class="name"><code>author</code></td>
<td class="type">
<span class="param-type">string</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>Return recommendations that belong only to the specified author</p></td>
</tr>
<tr>
<td class="name"><code>tag</code></td>
<td class="type">
<span class="param-type">string</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>Return recommendations that belong only to the specified tag</p></td>
</tr>
<tr>
<td class="name"><code>strategy</code></td>
<td class="type">
<span class="param-type">string</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>Algorithm to use for search. One of <code>click</code> or <code>recency</code>. Defaults to <code>recency</code></p></td>
</tr>
<tr>
<td class="name"><code>clickMethod</code></td>
<td class="type">
<span class="param-type">string</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>What click method to use for when <code>opts.strategy</code> is <code>click</code>. One of <code>ref_social</code>, <code>ref_search</code>, <code>ref_internal</code></p></td>
</tr>
<tr>
<td class="name"><code>sort</code></td>
<td class="type">
<span class="param-type">string</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>What to sort the results by. There are currently 2 valid options: <code>score</code>, which will sort articles by overall score and <code>pub_date</code> which will sort results by their publication date. The default is <code>score</code>.</p></td>
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
<a href="https://github.com/toddself/node-parsely/blob/master/search.js">search.js</a>
<span>, </span>
<a href="https://github.com/toddself/node-parsely/blob/master/search.js#L11">lineno 11</a>
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
</div><div class="jsdoc-githubify">
<section>
<article>
<div class="container-overview">
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/toddself/node-parsely/blob/master/shares.js">shares.js</a>
<span>, </span>
<a href="https://github.com/toddself/node-parsely/blob/master/shares.js#L3">lineno 3</a>
</li>
</ul></dd>
</dl>
</div>
<dl>
<dt>
<h4 class="name" id="byType"><span class="type-signature">&lt;static> </span>byType<span class="signature">(type, <span class="optional">auth</span>, cb)</span><span class="type-signature"> &rarr; {object}</span></h4>
</dt>
<dd>
<div class="description">
<p>Retreive a listing of tops posts or authors by social shares across top
social networks. Docs: <a href="http://www.parsely.com/api/api_ref.html#method-shares">/shares/{type}</a></p>
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
<td class="description last"><p>One of <code>posts</code>, <code>authors</code></p></td>
</tr>
<tr>
<td class="name"><code>opts.pub_days</code></td>
<td class="type">
<span class="param-type">number</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>Number of days since an article has been published since today to consider for _shares value. Use days=1 or days=3 to only consider shares from last several days.</p></td>
</tr>
<tr>
<td class="name"><code>opts.pub_date_state</code></td>
<td class="type">
<span class="param-type">mixed</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>Start date of content publication to consider. Must use <code>opts.pub_date_end</code> as well.</p></td>
</tr>
<tr>
<td class="name"><code>opts.pub_date_end</code></td>
<td class="type">
<span class="param-type">mixed</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>End date of content publication to consider. Must use <code>opts.pub_date_start</code> as well.</p></td>
</tr>
<tr>
<td class="name"><code>opts.limit</code></td>
<td class="type">
<span class="param-type">string</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>Number of records to retrieve, detauls to <code>10</code></p></td>
</tr>
<tr>
<td class="name"><code>opts.page</code></td>
<td class="type">
<span class="param-type">string</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>Page number of results set, defaults to <code>1</code></p></td>
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
<a href="https://github.com/toddself/node-parsely/blob/master/shares.js">shares.js</a>
<span>, </span>
<a href="https://github.com/toddself/node-parsely/blob/master/shares.js#L11">lineno 11</a>
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
<h4 class="name" id="postDetail"><span class="type-signature">&lt;static> </span>postDetail<span class="signature">(url, <span class="optional">auth</span>, cb)</span><span class="type-signature"> &rarr; {object}</span></h4>
</dt>
<dd>
<div class="description">
<p>For a given canonical URL, return the total share counts across the top
social networks. Docs: <a href="http://www.parsely.com/api/api_ref.html#method-share-post-detail">/shares/post/detail</a></p>
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
<td class="description last"><p>Canonical URL. Must start with http|https</p></td>
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
<a href="https://github.com/toddself/node-parsely/blob/master/shares.js">shares.js</a>
<span>, </span>
<a href="https://github.com/toddself/node-parsely/blob/master/shares.js#L61">lineno 61</a>
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
</div><div class="jsdoc-githubify">
<section>
<article>
<div class="container-overview">
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/toddself/node-parsely/blob/master/track.js">track.js</a>
<span>, </span>
<a href="https://github.com/toddself/node-parsely/blob/master/track.js#L3">lineno 3</a>
</li>
</ul></dd>
</dl>
</div>
<dl>
<dt>
<h4 class="name" id="track"><span class="type-signature">&lt;static> </span>track<span class="signature">(params, <span class="optional">user_agent</span>, <span class="optional">cb</span>)</span><span class="type-signature"> &rarr; {object}</span></h4>
</dt>
<dd>
<div class="description">
<p>Sends a tracking request to pixel.parsel.com. Docs: <a href="http://parsely.com/api/data_insertion_api.html">data insertion api</a></p>
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
<td class="description last"><p>map of values</p>
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
<a href="https://github.com/toddself/node-parsely/blob/master/track.js#L36">lineno 36</a>
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
