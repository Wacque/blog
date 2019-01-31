const fs = require('fs')
const mongoo = require('./mongoo')
const mysqlo = require('./mysqlo')
const path = require('path');

// filename: name-author.xxx

const files = fs.readdirSync('./')

const fixedPas = 0;

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

    const mysqlRes =  mysqlo.insert(mysqlData, (insertId) => {
      const content = fs.readFileSync(files[i]).toString()
      const mongoData = {
          name: name,
          pId: insertId,
          content: content
      }
      const mongoRes = mongoo.insertOne(mongoData, res => {
        if(res) {
          fixedPas +=1 
        }
        
        if(fixedPas === files.length) {
          return
        }
      })
    })
  }
}
