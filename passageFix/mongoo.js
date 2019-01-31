const dbPath = 'mongodb://localhost:27017/'
const dbName = 'blog'
const collection = 'passages'
const MongoClient = require("mongodb").MongoClient

const insertOne = async (data) => {
  __connectDB( (err, client) => {
    client.close()
  })
  console.log('hahha')
  const client = await MongoClient.connect(dbPath, {useNewUrlParser : true})
  const db = client.db(dbname)
  const collection = db.collection(collection)
  const result = await collection.insertOne(data)
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