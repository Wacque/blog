const fs = require('fs')
const mongoo = require('./mongoo')
const mysqlo = require('./mysqlo')
const path = require('path');

// filename: name-author.xxx

const files = fs.readdirSync('./')

for(let i = 0; i < files.length; i ++) {
  const thisFilePath = path.join(__dirname, files[i])
  const fileStat = fs.statSync(thisFilePath).isDirectory()
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
    const now = new Date()
    const mysqlData = {
      name: name,
      author: author,
      create_time: `${now.toLocaleDateString()} ${now.toLocaleTimeString()}` 
    }
    const mysqlRes = await mysqlo.insert(mysqlData)

    // 将数据写到mongodb
    const content = fs.readFileSync(files[i]).toString()
    const mongoData = {
        pId: mysqlRes.id,
        content: content
    }
    const mongoRes = await mongoo.mongoInsert(mongoData)
  }
}
