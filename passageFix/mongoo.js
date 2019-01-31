let _dbPath = 'mongodb://localhost:27017/'
let _dbName = 'blog'
let _collection = 'passages'
let _MongoClient = require("mongodb").MongoClient

exports.insertOne = (data, cb) => {
  __connectDB( (err, client) => {
    var db = client.db(_dbName)
    var collection = db.collection(_collection)
    collection.insertOne(data, (err, r) => {
      if(err) {
        throw err
      }
      typeof cb === 'function' && cb(r.result.ok)
      client.close()
    })
  })
}

function __connectDB(action) {
  _MongoClient.connect(_dbPath, {useNewUrlParser : true}, (err,  client) => {
    if(err) {
      throw err
    }
    action(err, client)
  })
}