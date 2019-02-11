const  mysql = require('mysql');
const daoPassages = require('../DAOs/passages')
const daoCate = require('../DAOs/cate')
const daoImgs = require('../DAOs/imgs')

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'blog'
});

connection.connect()
const promiseFix = (sql, params = []) => {
  return new Promise((resolve, reject) => {
    connection.query(sql, params, (err, res) => {
        resolve(res)
        reject(err)
    })
  })
}

// 处理promise
const mysqlQuery = async (sql, params) => {
  let a
  await promiseFix(sql, params).then(res => {
    a = res
    return res
  }).then(err => {
    return err
  }) 
  return a
}

// 根据分类获取文章
exports.getArticle = async function (cate_name) {
  let idRes = null
  if(cate_name !== '') {
    idRes = await mysqlQuery(daoCate.queryByCateName, stringParam([cate_name]))
  }
  
  // 没有该分类查询全部
  let passageRes
  if(!idRes) {
    passageRes = await mysqlQuery(daoPassages.queryAll)
  } else {
    passageRes = await mysqlQuery(daoPassages.queryByPassageId, stringParam([idRes[0].id]))
  }
  return passageRes
}

// 将参数带上''
function stringParam(params) {
  params.map(item => `'${item}'`)
  return params
}