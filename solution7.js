var mongo = require('mongodb').MongoClient;

mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, db) {
  var prices = db.collection('prices');
  var match = { $match: { size: process.argv[2] } };
  var group = { $group: { _id: 'avg', avg: { $avg: '$price' } }};
  
  if (err) throw err;
  
  prices.aggregate([match, group]).toArray(function(err, data) {
      if (err) throw err;
      console.log((+data[0].avg).toFixed(2));
      db.close();
    });
});