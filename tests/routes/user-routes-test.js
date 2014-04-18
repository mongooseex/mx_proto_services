'use strict';

// var expect = require('chai').expect
//   , appSettings = require('../../app-settings.json')
//   , dns = appSettings.server.host + ':' + appSettings.port.toString()
//   , service = require('../../services').startServices()
//   , restify = require('restify')
//   , client = restify.createJsonClient({ url: 'http://' + dns, version: '*' })
//   ;
  
// function rndInt (low, high) {
//   return Math.floor(Math.random() * (high - low + 1) + low);
// }

// describe('POST /api/users', function () {
//   it('returns 201 on success', function (done) {

//     var userNum = rndInt(99999, 999999999)
//     , input = {
//         email: 'test' + userNum.toString() + '@test.com',
//         displayName: 'firstname lastname'
//       }
//     ;

//     client.post('api/users', input, function (err, req, res, obj) {

//       if (err) {
//         done(err);
//       }

//     });
//   });
// });