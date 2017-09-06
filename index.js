'use strict';

const logUpdate = require('log-update');
const chalk = require('chalk');
let loopingInterval;
let i = 0;

var defineColor = function(amount) {
    return amount < 20 ? chalk.red : amount < 40 ? chalk.yellow : chalk.green;
};

module.exports = {
    start: function() {
        return new Promise((resolve, reject) => {
            loopingInterval = setInterval(function() {
                var ii = i++;
                logUpdate(defineColor(ii)(Array(ii).join('=')));
                if (i > 50) {
                    i = 0;
                }
            }, 25);
            resolve(loopingInterval);
        });
    },
    stop: function() {
        i = 0;
        return new Promise((resolve, reject) => {
            clearInterval(loopingInterval);
            resolve();
        });
    }
};
