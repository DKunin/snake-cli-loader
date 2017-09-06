'use strict';

var logUpdate = require('log-update');
var chalk = require('chalk');
var loopingInterval;
var i = 0;
var defineColor = function(amount) {
  return amount < 20 ? chalk.red : amount < 40 ? chalk.yellow : chalk.green;
};

module.exports = {
  start: function() {
    loopingInterval = setInterval(function() {
      var ii = i++;
      logUpdate(defineColor(ii)(Array(ii).join('=')));
      if (i > 50) {
        i = 0;
      }
    }, 25);
  },
  stop: function() {
    i = 0;
    clearInterval(loopingInterval);
  }
};
