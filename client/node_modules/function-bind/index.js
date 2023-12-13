'use strict';

var implementation = require('function-bind/implementation');

module.exports = Function.prototype.bind || implementation;
