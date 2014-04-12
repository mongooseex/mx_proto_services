var rc = require('./route-collection').create('/api/auth')
  ;

rc.add({
  verb: 'get',
  route: '/',
  handler: function mainAuthRouteHandler(req, res, next) {
    
  }
  // handler: function pingDefaultRouteHandler(req, res, next) {
  //   res.send({ data: 'pong' });
  //   next();
  // }
});

exports.init = rc.init;