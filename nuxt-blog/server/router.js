const axios = require('axios')
const mongoAction = require('./model/mongoModel')
const mysqlAction = require('./model/mysqlModel')
const { defaultData }  = require('./utils')

exports.articleDetail = (req, res, next) => {
     mongoAction.mongoFind({pid: Number(req.query.id) }, (err, result) => {
      res.json(new defaultData(0, result, 0, 'sucess'))
     })
}

exports.getArticle = async (req, res, next) => {
  const result = await mysqlAction.getArticle(req.query.type);
  res.json(new defaultData(0, result, 0, 'sucess'))
}
