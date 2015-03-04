'use strict';

var qs = require('querystring');

var nock = require('nock');
var test = require('tap').test;
var recs = require('../recommendations');

function setUp(){
  nock('http://api.parsely.com:80')
    .filteringPath(function(){
      return '/test';
    })
    .get('/test')
    .reply(200, function(uri){
      return {data: {uri: uri}};
    });
}

test('profile', function(t){
  setUp();
  t.plan(6);

  t.throws(function(){
    recs.profile(function(){});
  }, 'Must provide a UUID');

  t.throws(function(){
    recs.profile('foo', function(){});
  }, 'Must provide a valid URL');

  t.throws(function(){
    recs.profile('foo', 'http://foo.com', function(){});
  }, 'Must provide an API key');

  recs.profile('foo', 'http://foo.com', 'api_key', function(err, data){
    t.ok(!err, 'no errors');
    var query = qs.parse(data.uri.split('?')[1]);
    t.equal(query.uuid, 'foo', 'uuid translated');
    t.equal(query.url, 'http://foo.com', 'url is there');
  });
});

test('related', function(t){
  setUp();
  t.plan(9);

  t.throws(function(){
    recs.related('foo', function(){});
  }, 'type must be in list');

  t.throws(function(){
    recs.related('url', 'foo', function(){});
  }, 'if type is url, criteria must be a url');

  t.throws(function(){
    recs.related('uuid', 'foo', function(){});
  }, 'requires an API key');

  t.throws(function(){
    recs.related('uuid', 'foo', 'api_key', {strategy: 'click'}, function(){});
  }, 'strategy click requires a clickMethod');

  t.throws(function(){
    recs.related('uuid', 'foo', 'api_key', {strategy: 'click', clickMethod: 'bar'}, function(){});
  }, 'strategy click requires a valid clickMethod');

  recs.related('uuid', 'foo', 'api_key', function(err, data){
    t.ok(!err, 'no errors');
    var query = qs.parse(data.uri.split('?')[1]);
    t.equal(query.uuid, 'foo', 'added query param correctly');
  });

  setUp();

  var opts = {strategy: 'click', clickMethod: 'ref_internal'};
  recs.related('uuid', 'foo', 'api_key', opts, function(err, data){
    t.ok(!err, 'no errors');
    var query = qs.parse(data.uri.split('?')[1]);
    t.equal(query['click.method'], 'ref_internal', 'build nested options');
  });
});

test('clicks', function(t){
  setUp();
  t.plan(4);

  t.throws(function(){
    recs.clicks(function(){});
  }, 'requires an api key');

  t.throws(function(){
    recs.clicks('api_key', {url: 'foo'}, function(){});
  }, 'if a url is specified as an option it must be valid');

  recs.clicks('api_key', {url: 'http://test.com'}, function(err, data){
    t.ok(!err, 'no errors');
    var query = qs.parse(data.uri.split('?')[1]);
    t.equal(query.url, 'http://test.com', 'url added correctly');
  });
});

test('clicksTotal', function(t){
  setUp();

  recs.clicksTotal('api_key', function(err, data){
    t.ok(!err, 'no errors');
    t.equal(data.uri, '/clicks/total?', 'built uri');
    t.end();
  });
});

test('history', function(t){
  setUp();
  t.plan(4);

  t.throws(function(){
    recs.history(function(){});
  }, 'must provide a uuid');

  t.throws(function(){
    recs.history('uuid', function(){});
  }, 'must provide an api key');

  recs.history('uuid', 'api_key', function(err, data){
    t.ok(!err, 'no errors');
    var query = qs.parse(data.uri.split('?')[1]);
    t.equal(query.days, 'uuid', 'built...');
  });
});

test('post editorial overrides', function(t){
  t.plan(10);
  nock('http://api.parsely.com:80')
    .filteringPath(function(){
      return '/test';
    })
    .post('/test')
    .twice()
    .reply(201, function(uri){
      return {data: {uri: uri}};
    });

  t.throws(function(){
    recs.createOverride(function(){});
  }, 'must provide a URL');

  t.throws(function(){
    recs.createOverride('http://url.com', function(){});
  }, 'must provide a priority');

  t.throws(function(){
    recs.createOverride('http://url.com', 'foo', 10, function(){});
  }, 'must provide an api key');

  recs.createOverride('http://url.com', '2013-01-01', 10, 'api_key', function(err, data){
    t.ok(!err, 'no errors');
    var query = data && data.uri ? qs.parse(data.uri.split('?')[1]) : {};
    t.equal(query.url, 'http://url.com', 'url added');
    t.equal(query.expiry, '2012-12-31', 'date added');
    t.equal(query.priority, '10', 'priority added');
  });

  recs.createOverride('http://url.com', 10, 'api_key', function(err, data){
    t.ok(!err, 'no errors');
    var query = qs.parse(data.uri.split('?')[1]);
    t.equal(query.url, 'http://url.com', 'url added');
    t.equal(query.priority, '10', 'priority added, expiry skipped');
  });
});


test('get editorial overrides', function(t){
  setUp();
  t.plan(10);

  t.throws(function(){
    recs.editorialOverrides(function(){});
  }, 'must provide an api key');

  recs.editorialOverrides('api_key', function(err, data){
    t.ok(!err, 'no errors');
    var query = qs.parse(data.uri.split('?')[1]);
    t.equal(query.apikey, 'api_key', 'api_key used');
  });

  setUp();

  recs.editorialOverrides(10, 'api_key', function(err, data){
    t.ok(!err, 'no errors');
    var query = qs.parse(data.uri.split('?')[1]);
    t.equal(query.limit, '10', 'limit defined');
    t.equal(query.apikey, 'api_key', 'apikey defined');
  });

  setUp();

  recs.editorialOverrides(10, 1, 'api_key', function(err, data){
    t.ok(!err, 'no errors');
    var query = qs.parse(data.uri.split('?')[1]);
    t.equal(query.limit, '10', 'limit');
    t.equal(query.page, '1', 'page');
    t.equal(query.apikey, 'api_key', 'apikey');
  });
});