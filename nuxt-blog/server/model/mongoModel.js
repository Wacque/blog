const _collection = 'passages'
const MongoClient = require("mongodb").MongoClient
const url = 'mongodb://localhost:27017/'
const dbname = 'blog'

// 查找
exports.mongoFind = (res, data, callback) => {
  __connectDB((err, client) => {
    var db = client.db(dbname)
    var collection = db.collection(_collection)
    collection.find(data).toArray((err, doc) => {
      callback(err, doc)
      client.close()
    })
  })
}

function __connectDB(action) {
  MongoClient.connect(url, {useNewUrlParser : true}, (err,  client) => {
    test.equal(null, err)
    action(err, client)
  })
}