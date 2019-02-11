let fs = require('fs')
let mongoo = require('./mongoo')
let mysqlo = require('./mysqlo')
let path = require('path');

// filename: name-author.xxx
const passagePath = '../passage/'
let files = fs.readdirSync(passagePath)
for(let i = 0; i < files.length; i ++) {
  if(files[i].indexOf('.html') < 0) {
    continue
  }
  
  let thisFilePath = path.join(__dirname, passagePath + files[i])
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
      var content = fs.readFileSync(thisFilePath).toString()
      var bodyReg = /<body .*?>(.*)<\/body>/s;
      var content = bodyReg.exec(content);
      let mongoData = {
          name: name,
          pid: insertId,
          content: content[0]
      }
      let mongoRes = mongoo.insertOne(mongoData, res => {
        if(i === files.length - 1) {
           process.exit()
        }
      })
    })
  }
}
