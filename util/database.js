const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (cb) => {
  MongoClient.connect(
    `mongodb+srv://test1234:test1234@cluster0.t0uam.mongodb.net/node-complete?retryWrites=true&w=majority`,
    { useUnifiedTopology: true }
  )
    .then((client) => {
      console.log('CONNECTED!');
      _db = client.db();
      cb();
    })
    .catch((err) => console.log(err));
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw 'No database found!';
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
