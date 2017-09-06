'use strict';

var test = require('ava');
var snakeloader = require('./');

test('loads alright', async (t) => {
    snakeloader.start().then(() => {
        t.pass();
    });

    snakeloader.stop().then(() => {
        t.pass();
    });

    t.plan(2);
});
