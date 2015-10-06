'use strict';
//const Promise = require('bluebird');
//const _ = require('lodash');
const util = require('util');

let log;

export default class Publisher {
    constructor(options = {}, logOptions) {
        log = require('logfilename')(__filename, logOptions);

        log.info('options:', util.inspect(this._options));
    }
}
