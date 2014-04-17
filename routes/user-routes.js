'use strict';

var appSettings = require('../app-settings.json')
  , rc = require('./route-collection').create('/api/users')
  , db = require('seraph')(appSettings.connectionStrings.neo4j)
  , User = require('seraph-model')(db, 'user-account')
  ;

User.schema = {
  displayName: { type: String, required: true },
  email: { type: String, required: true },
  password: {type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  gender: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  bio: { type: String, required: false },
  created: { type: Number, required: true },
  lastLogin: { type: Number, required: true },
  lastActivity: { type: Number, required: true}
};

rc.add({
  verb: 'post',
  route: '/',
  handler: function accountSignupPostHandler(req, res, next) {

    var userInput = req.body
      , currentUnixTS = (new Date()).getUTCSeconds()
      ;

    userInput.created = currentUnixTS;
    userInput.lastLogin = currentUnixTS;
    userInput.lastActivity = currentUnixTS;

    User.where({ email: userInput.email }, 
      function locateUserCallback (err, foundNodes) {

        next.ifError(err);
        if (foundNodes && foundNodes.length > 0) {
          res.send(409);
          return;
        }

        User.save(userInput, 'user', function saveUserCallback(err, savedNode) {
          next.ifError(err);
          res.send(201, savedNode);
        });
      });

    next();
  }
});

exports.init = rc.init;