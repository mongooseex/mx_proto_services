'use strict';

var rc = require('./route-collection').create('/')
  ;

rc.add({
  verb: 'get',
  route: '/',
  handler: function rootDefaultRouteHandler(req, res, next) {
    res.send('r');
    next();
  }
});

exports.init = rc.init;