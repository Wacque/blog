const  mysql = require('mysql');
const connection = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : 'root',
    database : 'album'
});

exports.insert = (data) => {
    connection.connect()

    const keys = Object.keys(data).join(',')
    const values = Object.values(data).join(',')
    const addsql = `INSERT INTO imgs(${keys}) VALUES(${values})`;
    connection.query(addsql, (err, result) => {
        if (err) {
            console.log(err);
        }
        console.log(result)
    })

    connection.end()
}

