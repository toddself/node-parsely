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
<h4 class="name" id="exports"><span class="type-signature"></span>exports<span class="signature">(params, idsite, <span class="optional">date</span>, ip_address, url, urlref, screen, title, action, body, parsely_site_uuid, <span class="optional">user_agent</span>, <span class="optional">cb</span>)</span><span class="type-signature"> &rarr; {undefined}</span></h4>
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
<td class="description last"><p>map of values from <a href="http://parsely.com/api/data_insertion_api.html">data insertion api</a></p></td>
</tr>
<tr>
<td class="name"><code>idsite</code></td>
<td class="type">
<span class="param-type">string</span>
</td>
<td class="attributes">
</td>
<td class="description last"><p>site ID assigned by parsely</p></td>
</tr>
<tr>
<td class="name"><code>date</code></td>
<td class="type">
<span class="param-type">date</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>time/date of request.</p></td>
</tr>
<tr>
<td class="name"><code>ip_address</code></td>
<td class="type">
<span class="param-type">string</span>
</td>
<td class="attributes">
</td>
<td class="description last"><p>IP Address of person performing action</p></td>
</tr>
<tr>
<td class="name"><code>url</code></td>
<td class="type">
<span class="param-type">string</span>
</td>
<td class="attributes">
</td>
<td class="description last"><p>URL of page action was taken on</p></td>
</tr>
<tr>
<td class="name"><code>urlref</code></td>
<td class="type">
<span class="param-type">string</span>
</td>
<td class="attributes">
</td>
<td class="description last"><p>Referrer</p></td>
</tr>
<tr>
<td class="name"><code>screen</code></td>
<td class="type">
<span class="param-type">string</span>
</td>
<td class="attributes">
</td>
<td class="description last"><p>Screen dimensions: Monitor width x height|Browser width x height|color-depth: 1024x758|900x600|24</p></td>
</tr>
<tr>
<td class="name"><code>title</code></td>
<td class="type">
<span class="param-type">string</span>
</td>
<td class="attributes">
</td>
<td class="description last"><p>Title of the document</p></td>
</tr>
<tr>
<td class="name"><code>action</code></td>
<td class="type">
<span class="param-type">string</span>
</td>
<td class="attributes">
</td>
<td class="description last"><p>Type of request (pageview)</p></td>
</tr>
<tr>
<td class="name"><code>body</code></td>
<td class="type">
<span class="param-type">object</span>
</td>
<td class="attributes">
</td>
<td class="description last"><p>user data about user being tracked</p></td>
</tr>
<tr>
<td class="name"><code>parsely_site_uuid</code></td>
<td class="type">
<span class="param-type">sting</span>
</td>
<td class="attributes">
</td>
<td class="description last"><p>Unique identifier for user</p></td>
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
<a href="https://github.com/toddself/node-parsely/blob/master//Users/tkenned2/src/node-parsely/track.js">/Users/tkenned2/src/node-parsely/track.js</a>
<span>, </span>
<a href="https://github.com/toddself/node-parsely/blob/master//Users/tkenned2/src/node-parsely/track.js#L24">lineno 24</a>
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
<span class="param-type">undefined</span>
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