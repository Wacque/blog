const axios = require('axios')
const mongoAction = require('./model/mongoModel')
const mysqlAction = require('./model/mysqlModel')
const { defaultData }  = require('./utils')

exports.articleDetail = (req, res, next) => {
    // mongo
    // console.log(req.query.id)
     mongoAction.mongoFind({pId: req.query.id}, (res, err) => {
      //  console.log(res)
     })
}

exports.getArticle = async (req, res, next) => {
  const result = await mysqlAction.getArticle(req.query.type);
  res.json(new defaultData(0, result, 0, 'sucess'))
}
