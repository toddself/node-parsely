'use strict';

module.exports = function(obj){
  return Object.keys(obj).reduce(function(a, k){
    if(obj[k]){
      a[k] = obj[k];
    }
    return a;
  },{});
};