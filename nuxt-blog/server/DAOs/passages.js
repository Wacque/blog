module.exports = {
  queryAll: 'SELECT id,name,author,create_time FROM blog_passages',
  queryByPassageId: 'SELECT id,name,author,create_time FROM blog_passages WHERE cate_id = ?'
}