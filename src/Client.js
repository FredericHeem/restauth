let request = require('request');
let Promise = require('bluebird');
let _ = require('lodash');
let log;

export default class Client {
    constructor(config = {}, logOptions) {
        log = require('logfilename')(__filename, logOptions);
        this.config = config;
        this.url = this.config.url || 'http://localhost:3000/api/';
    }
    _ops(ops, action, resCodes, param) {
      log.debug(`${ops} ${action} with %s to `, param ? JSON.stringify(param) : "no param", this.url);
      let me = this;
      let data = updateRequestWithKey(this, {});
      if(param){
        data.json = param;
      }
      data.method = ops;
      let requestFn = Promise.promisify(request);
      return requestFn(this.url + action, data)
      .spread(function(res, body) {
        log.debug("headers ", JSON.stringify(res.headers));
        let cookiesIn = res.headers['set-cookie'];
        if (cookiesIn) {
          me.cookies = _.map(cookiesIn, cookie => {
            //console.log("cookie:" + cookie);
            return request.cookie(cookie);
          });
        }
        console.log("me.cookies:", me.cookies);

        if (resCodes.indexOf(res.statusCode) == -1){
          throw res;
        } else {
          return body;
        }
      });
    }

    get(action, param) {
      return this._ops("GET", action, [200], param);
    }

    patch(action, param) {
      return this._ops("PATCH", action, [200, 204], param);
    }

    delete(action, param) {
      return this._ops("DELETE", action, [204], param);
    }

    post(action, param) {
      return this._ops("POST", action, [200, 201, 204], param);
    }

    login(param) {
      let paramDefault = {
          email:this.config.email,
          username:this.config.username,
          password:this.config.password
      };

      return this.post('v1/auth/login', param || paramDefault);
    }
}

function updateRequestWithKey(client, data){
  data.json = {};
  if(client.cookies){
    let jar = request.jar();
    jar._jar.rejectPublicSuffixes = false;
    _.each(client.cookies, cookie => {
      console.log("cookie:" + cookie);
      jar.setCookie(cookie, client.url);
    });

    data.jar = jar;
  }
  return data;
}
