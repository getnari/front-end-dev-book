
(function(window) {
  'use strict';
  var App = window.App || {};

  function DataStore() {
    console.log('running the Datastore function');
    this.data = {};
  }

  DataStore.prototype.add = function(key, val) {
    this.data[key] = val;
    console.log(this);
    console.log(typeof(this));
  };

  DataStore.prototype.get = function(key) {
    return this.data[key];
  };

  DataStore.prototype.getAll = function() {
    return this.data;
  };

  DataStore.prototype.remove = function(key) {
    delete this.data[key];
  };

  App.DataStore = DataStore;
  window.App = App;
})(window);
