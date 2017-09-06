'use strict';

var test = require('ava');
var snakeloader = require('./');

test('loads alright', function(t) {
    snakeloader.start();
    setTimeout(function() {
        snakeloader.stop();
        t.end();
    }, 3000);
    t.plan(3);
});
