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
