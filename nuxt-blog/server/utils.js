class defaultData {
  constructor (resultcode, results, total, msg) {
    this.resultcode = resultcode
    this.data = {
      "results": results
    }
    this.total = total
    this.msg = msg
  }
}

module.exports = {
  defaultData
}