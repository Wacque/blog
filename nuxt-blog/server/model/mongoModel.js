const _collection = 'passages'
const MongoClient = require("mongodb").MongoClient
const url = 'mongodb://localhost:27017/'
const dbname = 'blog'

// 查找
exports.mongoFind = (data, callback) => {
  __connectDB((err, client) => {
    var db = client.db(dbname)
    var collection = db.collection(_collection)
    console.log(data)
    collection.find(data).toArray((err, doc) => {
      console.log(doc)
      callback(err, doc)
      client.close()
    })
  })
}

function __connectDB(action) {
  MongoClient.connect(url, {useNewUrlParser : true}, (err,  client) => {
    action(err, client)
  })
}