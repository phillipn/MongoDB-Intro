var mongo = require('mongodb').MongoClient;
var first = process.argv[2];
var last = process.argv[3];
var doc = { firstName: first, lastName: last }
mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, db) {
  if (err) throw err;
  var docs = db.collection('docs');
  docs.insert(doc, function(err, data) {
      if (err) throw err;
      console.log(JSON.stringify(doc));
      db.close();
    });
});