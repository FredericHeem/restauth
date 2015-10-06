import 'mochawait';
import shoud from 'should';
import assert from 'assert';
var Client = require('../src/').Client;

describe('RestAuth', function() {
  'use strict';
  this.timeout(15e3);
  let log = require('logfilename')(__filename, {
    console: {
      level: 'debug'
    }
  });

  let client;
  const config = {
    username:"alice",
    password:"password",
    url:"http://localhost:3000/api/"
  };

  before(async () => {
    log.debug('');
  });

  after(async () => {

  });

  describe('Invalid Constructor', () => {
    it('no options', done => {
      (function(){
        new Client();
      }).should.not.throw();
      done();
    });
  });
  describe('Standard ops', () => {
    before(async () => {
      client = new Client(config);

      let resLogin = await client.login();
      assert(resLogin);
    });
    it('get', async () => {
      let users = await client.get('v1/me');
      assert(users);
    });
  });
});
