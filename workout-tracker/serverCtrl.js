var app = require('./server.js');
var db = app.get('db');
module.exports = {
  myTest: function (req, res) {
    db.database_call([], function (err, results) {
      console.log("test tickles")
      if(err){
        return res.send(err);
      }
      return res.send(results);
    })
  }
}
