'use strict';

var qs = require('querystring');

var nock = require('nock');
var test = require('tap').test;
var referrer = require('../referrers');

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
  referrer.byType('social', 'test_key', function(err, data){
    t.ok(!err, 'no errors');
    t.ok(data.uri.indexOf('social'), 'url built correctly');
    t.end();
  });
});

test('by type with options', function(t){
  setUp();
  var opts = {
    section: 'homepage',
    period_start: new Date('2013-01-01'),
    period_end: '2013-02-01'
  };

  referrer.byType('social', 'test_key', opts, function(err, data){
    t.ok(!err, 'no errors');
    var query = qs.parse(data.uri.split('?')[1]);
    t.equal(query.period_start, '2012-12-31', 'date transformation');
    t.equal(query.period_end, '2013-01-31', 'date transformation');
    t.equal(query.section, opts.section, 'query string builder working');
    t.end();
  });
});

test('by type with bad inputs', function(t){
  t.throws(function(){
    referrer.byType('foo', 'test_key', function(){});
  }, 'type not in list');

  t.throws(function(){
    referrer.byType('social', function(){});
  }, 'no api key provided');

  t.end();
});

test('by meta', function(t){
  setUp();
  referrer.byMeta('social', 'posts', 'api_key', function(err, data){
    t.ok(!err, 'no errors');
    t.ok(data.uri.indexOf('social/posts'), 'uri built correctly');
    t.end();
  });
});

test('by metavaluedetail', function(t){
  setUp();
  t.plan(3);

  referrer.metaValueDetail('social', 'posts', 'foo', 'api_key', function(err, data){
    t.ok(!err, 'no errors');
    t.ok(data.uri.match('social/posts/foo/detail'), 'uri built correctly');
  });

  t.throws(function(){
    referrer.metaValueDetail('social', 'posts');
  }, 'throws when missing data');
});

test('by postdetail', function(t){
  setUp();
  t.plan(4);
  t.throws(function(){
    referrer.postDetail('foo', 'test_key', function(){});
  }, 'requires a well formed URL');

  referrer.postDetail('http://example.com/test', 'api_key', function(err, data){
    t.ok(!err, 'no errors');
    var query = qs.parse(data.uri.split('?')[1]);
    t.ok(data.uri.match(encodeURIComponent('http://example.com/test')), 'encoded uri built correctly');
    t.equal(query.url, 'http://example.com/test', 'decoded');
  });
});