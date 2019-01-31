const  mysql = require('mysql');
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'blog'
});

connection.connect()
const mysqlQuery = (sql) => {
  return new Promise((resolve, reject) => {
    connection.query(sql, (err, res) => {
        if(err) {
            throw err
        }
        resolve(res)
    })
  })
}

exports.getArticle = async function (cate_name) {
  const idSql = `SELECT id FROM blog_passages_cate WHERE cate_name = '${cate_name}'`
  const idRes = await mysqlQuery(idSql)

  // 没有当前分类
  if(!! idRes) {
    return false
  }

  const passageSql = `SELECT name,author,create_time FROM blog_passages WHERE cate_id = '${idRes[0].id}'`
  const passageRes = await(passageSql)
  console.log(passageRes)
  // const cate_id = res[0].id
  //   
}