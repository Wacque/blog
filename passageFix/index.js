let fs = require('fs')
let mongoo = require('./mongoo')
let mysqlo = require('./mysqlo')
let path = require('path');

// filename: name-author.xxx

let files = fs.readdirSync('./passage')

for(let i = 0; i < files.length; i ++) {
  let thisFilePath = path.join(__dirname, files[i])
  let fileStat = fs.statSync(thisFilePath).isDirectory()
  if(! fileStat) { 
    let name = '';
    let author = '';

    // 考虑到有作者的情况
    if(files[i].indexOf('-') > -1) {
      let splitone = files[i].split('-')
      name = splitone[0]
      author = splitone[1].split('.')[0]
    } else {
      name = files[i].split('.')[0]
    }

    // 将数据写入msyql
    let now = new Date()
    let mysqlData = {
      name: name,
      author: author,
      create_time: `${now.toLocaleDateString()} ${now.toLocaleTimeString()}` 
    }

    let mysqlRes =  mysqlo.insert(mysqlData, (insertId) => {
      let content = fs.readFileSync(files[i]).toString()
      let mongoData = {
          name: name,
          pId: insertId,
          content: content
      }
      let mongoRes = mongoo.insertOne(mongoData, res => {
        if(i === files.length - 1) {
           process.exit()
        }
      })
    })
  }
}
