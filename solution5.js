var mongo = require('mongodb').MongoClient;
var dbName = process.argv[2];
var id = process.argv[4];
mongo.connect('mongodb://localhost:27017/' + dbName, function(err, db) {
  if (err) throw err;
  var collection = db.collection(process.argv[3]);
  collection.remove({ _id: id }, function(err, data) {
      if (err) throw err;
      db.close();
    });
});