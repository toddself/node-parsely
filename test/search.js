'use strict';

var qs = require('querystring');

var nock = require('nock');
var test = require('tap').test;
var search = require('../search');

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

test('search', function(t){
  setUp();
  t.plan(6);

  search.search('reticulated splines', 'api_key', function(err, data){
    t.ok(!err, 'no errors');
    var query = qs.parse(data.uri.split('?')[1]);
    t.equal(query.q, 'reticulated splines','search unmolested');
    t.notEqual(data.uri.indexOf('/search'), -1, 'uri built');
  });

  t.throws(function(){
    search.search('foo', function(){});
  }, 'throws with bad inputs');

  t.throws(function(){
    search.search('foo', 'bar', {strategy: 'click'}, function(){});
  }, 'click needs a clickMethod set');

  t.throws(function(){
    search.search('foo', 'bar', {strategy: 'click', clickMethod: 'baz'}, function(){});
  }, 'click needs a proper clickMethod set');
});
