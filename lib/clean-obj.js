'use strict';

/**
 * Cleans an object, dropping all keys that don't resolve to truthy
 * @private
 * @method  clean
 * @param   {object} obj object to be cleaned
 * @returns {object} cleaned object
 */
module.exports = function(obj){
  return Object.keys(obj).reduce(function(a, k){
    if(obj[k]){
      a[k] = obj[k];
    }
    return a;
  },{});
};