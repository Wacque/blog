const  mysql = require('mysql');
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'blog'
});
connection.connect()
exports.insert =  (data, cb) => {
    const keys = Object.keys(data).join(',')
    const values = Object.values(data).map(item => `'${item}'`).join(',')
    const addsql = `INSERT INTO blog_passages(${keys}) VALUES(${values})`;
    const result =  connection.query(addsql, (err, res) => {
        if(err) {
            throw err
        }
        typeof cb === 'function' && cb(res.insertId)
    })
    return result
}