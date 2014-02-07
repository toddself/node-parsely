'use strict';

var qs = require('querystring');

var xtend = require('xtend');
var nock = require('nock');
var test = require('tap').test;
var analytics = require('../analytics');
var oauth = require('../lib/oauth');

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

test('simple by type', function(t){
  setUp();
  analytics.byType('test', 'posts', null, null, function(err, data){
    t.ok(!err, 'no errors');
    t.ok(data.uri.indexOf('posts'), 'uri contains posts');
    var query = qs.parse(data.uri.split('?')[1]);
    t.equal(query.key, 'test', 'key set properly');
    t.end();
  });
});

test('pass in options', function(t){
  setUp();
  analytics.byType('test', 'posts', {days: 1}, null, function(err, data){
    t.ok(!err, 'no errors');
    var query = qs.parse(data.uri.split('?')[1]);
    t.equal(query.days, '1', 'key set properly');
    t.end();
  });
});

test('direct to callback', function(t){
  setUp();
  analytics.byType('test', 'posts', function(err, data){
    t.ok(!err, 'no errors');
    t.ok(data.uri.indexOf('posts'), 'uri contains posts');
    t.end();
  });
});

test('simple auth', function(t){
  setUp();
  analytics.byType('test', 'posts', null, {sharedSecret: '12391bssr00'}, function(err, data){
    t.ok(!err, 'no errors');
    var query = qs.parse(data.uri.split('?')[1]);
    t.equal(query.secret, '12391bssr00', 'auth passed');
    t.end();
  });
});

test('sends oauth headers', function(t){
  var query = {key: 'test'};
  var authData = {consumerKey: 'test', secretKey: 'test'};
  var auth = oauth(xtend(authData, query));

  nock('http://api.parsely.com:80')
    .filteringPath(function(){
      return '/test';
    })
    .matchHeader('X-Parsley-Auth', auth)
    .get('/test')
    .reply(200, function(uri){
      return {data: {uri: uri}};
    });


  analytics.byType('test', 'posts', null, authData, function(err, data){
    t.ok(!err, 'no errors');
    t.ok(data, 'got data');
    t.end();
  });
});

test('post detail', function(t){
  setUp();
  analytics.postDetail('test', 'http://google.com', function(err, data){
    t.ok(!err, 'no errors');
    var query = qs.parse(data.uri.split('?')[1]);
    t.equal(decodeURI(query.url), 'http://google.com', 'url is present and encoded');
    t.ok(data.uri.indexOf('post/detail'), 'post/detail call made');
    t.end();
  });
});

test('bad post detail', function(t){
  setUp();
  t.throws(function(){
    analytics.postDetail('test', 'author', 'foo', function(){});
  }, 'bad inputs');
  t.end();
});

test('meta value', function(t){
  setUp();
  analytics.metaValueDetail('test', 'author', 'foo', function(err, data){
    t.ok(!err, 'no errors');
    t.ok(data.uri.indexOf('analytics/author/foo/details'), 'path is correct');
    var query = qs.parse(data.uri.split('?')[1]);
    t.equal(query.key, 'test', 'key is present');
    t.end();
  });
});
