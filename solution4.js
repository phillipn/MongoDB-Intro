var mongo = require('mongodb').MongoClient;
var first = process.argv[2];
var last = process.argv[3];

mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, db) {
  if (err) throw err;
  var users = db.collection('users');
  users.update({ username: 'tinatime' }, { $set: { age: 40} },  function(err, data) {
      if (err) throw err;
      db.close();
    });
});