const dbPath = 'mongodb://localhost:27017/'
const dbName = 'blog'
const collection = 'passages'
const MongoClient = require("mongodb").MongoClient

function insertOne(data) {
  __connectDB( (err, client) => {
    var db = client.db(dbname)
    var collection = db.collection(collection)
    collection.insertOne(data, (err, r) => {
      client.close()
      return data
    })
  })
}

function __connectDB(action) {
  MongoClient.connect(dbPath, {useNewUrlParser : true}, (err,  client) => {
    test.equal(null, err)
    action(err, client)
  })
}

exports.mongoInsert = (data) => {
    return insertOne(data)
}