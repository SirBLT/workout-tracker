const port = 8080
module.exports = {
  MASSIVE_URI: "postgres://postgres:lakers24$@localhost/workoutBuilder",
  port: port,
  authConfig: {
    domain: "sirblt.auth0.com",
    clientID: "eEhSOF5LZl9Fh6biTSPIaDGRXUARP4HW",
    clientSecret: "Oq8F4DX6LN1AJbN8R6DsSApizNaAuKMGQtai10mXmUGOQw_vbIqEqpQWMtBhFA-v",
    callbackURL: 'http://localhost:8080/auth/callback'
  }
}
