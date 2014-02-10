'use strict';

var qs = require('querystring');

var nock = require('nock');
var test = require('tap').test;
var shares = require('../shares');

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
  t.plan(3);

  shares.byType('posts', function(err, data){
    t.ok(!err, 'no errors');
    t.ok(data.uri.match('shares/posts'), 'uri built');
  });

  t.throws(function(){
    shares.byType('foo', function(){});
  }, 'throws with bad inputs');
});

test('postdetail', function(t){
  setUp();
  t.plan(4);

  t.throws(function(){
    shares.postDetail('foo', function(){});
  }, 'needs well formed URI');

  shares.postDetail('http://example.com/test', function(err, data){
    t.ok(!err, 'no errors');
    t.ok(data.uri.indexOf(encodeURIComponent('http://example.com/test')), 'encoded');
    var query = qs.parse(data.uri.split('?')[1]);
    t.equal(query.url, 'http://example.com/test', 'translated');
  });

});