const  mysql = require('mysql');
const connection = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : 'root',
    database : 'album'
});

exports.insert = async (data) => {
    connection.connect()

    const keys = Object.keys(data).join(',')
    const values = Object.values(data).join(',')
    const addsql = `INSERT INTO imgs(${keys}) VALUES(${values})`;
    const result = await connection.query(addsql)
    return result

    connection.end()
}

