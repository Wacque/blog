const _collection = 'passages'
const MongoClient = require("mongodb").MongoClient
const url = 'mongodb://localhost:27017/'
const dbname = 'blog'

// 查找
exports.mongoFind = (data, cb) => {
  __connectDB((err, client) => {
    var db = client.db(dbname)
    console.log(data)
    var collection = db.collection(_collection)
    collection.find(data).toArray((err, doc) => {
      if(err) {
        throw err
      }
      typeof cb === 'function' && cb(err, doc)
      client.close()
    })
  })
}

function __connectDB(action) {
  MongoClient.connect(url, {useNewUrlParser : true}, (err,  client) => {
    action(err, client)
  })
}