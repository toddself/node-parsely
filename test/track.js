/* jshint unused:false */
'use strict';

var test = require('tap').test;
var querystring = require('querystring');
var nock = require('nock');

var track = require('../track');
var urlPath;

function setup(){
  nock('http://pixel.parsely.com:80')
  .filteringPath(function(path){
    urlPath = path;
    return '/plogger';
  })
  .get('/plogger')
  .reply(200, 'OK');
}

test('requires idsite', function(t){
  t.throws(function(){
    track();
  }, 'requires an idsite');
  t.end();
});

test('generates dates', function(t){
  setup();
  var params = {idsite: 'test'};

  track(params, function(err){
    if(err){
      t.fail(err);
    }
    var date = new Date(querystring.parse(urlPath).date);
    t.ok(!isNaN(date), 'date generated');
    t.end();
  });
});

test('deals with bad dates', function(t){
  setup();
  var params = {idsite: 'test', date: 'bad'};
  track(params, function(err){
    if(err){
      t.fail(err);
    }
    var date = new Date(querystring.parse(urlPath).date);
    t.ok(!isNaN(date), 'date fixed');
    t.end();
  });
});

test('adds a random number', function(t){
  setup();
  var params = {idsite: 'test', date: (new Date())};

  track(params, function(err){
    if(err){
      t.fail(err);
    }
    var rand = querystring.parse(urlPath).rand;
    t.ok(rand.match(/\d+/), 'random numbers');
    t.end();
  });
});

test('does not require callbacks', function(t){
  setup();
  var params = {idsite: 'test'};
  t.doesNotThrow(function(){
    track(params);
  });
  t.end();
});