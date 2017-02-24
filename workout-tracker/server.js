
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var massive = require('massive');
var config = require('./config');
var passport = require('passport');
var Auth0Strategy = require('passport-auth0');

var app = module.exports = express();

app.use(express.static('./'));
app.use(bodyParser.json());
// app.use(session({secret: config.secret}));
app.use(passport.initialize());
app.use(passport.session());

var massiveUri = config.MASSIVE_URI;
var massiveServer = massive.connectSync({
  connectionString: massiveUri
});
app.set('db', massiveServer);
var db = app.get('db');

passport.use(new Auth0Strategy(config.authConfig, function(accessToken, refreshToken, extraParams, profile, done) {
  console.log(profile);
  return done(null, profile);
}));

app.get('/auth', passport.authenticate('auth0'));

app.get('/auth/callback', passport.authenticate('auth0', {
  successRedirect: '/#!/',
  failureRedirect: '/auth'
}));

passport.serializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

app.get('/auth/me', function(req, res, next) {
  if (!req.user)
    return res.status(404).send('User not found');
  res.status(200).send(req.user);
});



var serverCtrl = require('./serverCtrl');
app.get('/api/test', serverCtrl.myTest);

var port = config.port;
app.listen(port, function() {
  console.log('listening on port ', port);
});
