'use strict';
//const Promise = require('bluebird');
//const _ = require('lodash');

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});
var util = require('util');

var log = undefined;

var Publisher = function Publisher(options, logOptions) {
    if (options === undefined) options = {};

    _classCallCheck(this, Publisher);

    log = require('logfilename')(__filename, logOptions);

    log.info('options:', util.inspect(this._options));
};

exports['default'] = Publisher;
module.exports = exports['default'];