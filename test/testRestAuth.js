import 'mochawait';
var assert = require('assert');
var _ = require('lodash');
var Promise = require('bluebird');
var debug = require('debug');
var RestAuth = require('../src/').RestAuth;

describe('RestAuth', function() {
  'use strict';
  this.timeout(15e3);
  let log = require('logfilename')(__filename, {
    console: {
      level: 'debug'
    }
  });


  before(async () => {

  });

  after(async () => {

  });

  describe('Invalid Constructor', function() {
    it('no options', done => {
      (function(){
        new RestAuth()
      }).should.throw();
      done();
    });
  });
});
