const axios = require('axios')

exports.articleDetail = (req, res, next) => {
    axios.get('http://api.xieyanjun.com/article/view-ajax?id=5')
      .then(function (response) {
          // handle success
          const html = `<div style="font-size: 14px; margin: 0; padding: 0; width: 100%;"><h3 style="line-height: 160%; box-sizing: content-box; font-weight: 700; font-size: 27px; color: #333;">每日故事推送（20181205）</h3>
    <blockquote style="line-height: 160%; box-sizing: content-box; margin: 15px 0; border-left: 4px solid #ddd; padding: 0 15px; color: #777;">
    <h3 style="line-height: 160%; box-sizing: content-box; font-weight: 700; font-size: 27px; color: #333; margin-top: 0; margin-bottom: 0;">疑问</h3>
    </blockquote>
    <ul style="line-height: 160%; box-sizing: content-box; display: block; list-style-type: disc; padding-left: 30px; margin: 6px 0 10px; color: #333;">
    <li style="line-height: 160%; box-sizing: content-box; position: relative;">如果推送目标是馆长，直接推送跳转到馆长自己的借阅管，如果不是馆长，推动到目标借阅管？</li>
    <li style="line-height: 160%; box-sizing: content-box; position: relative;"><u style="line-height: 160%; box-sizing: content-box;"> 每晚8点定时推送所有打开过故事页面的用户 + 非分类的用户？</u> 非分类？希望被分为哪些类</li>
    </ul>
    <h3 style="line-height: 160%; box-sizing: content-box; font-weight: 700; font-size: 27px; color: #333;">押金模块 （20181107）</h3>
    <blockquote style="line-height: 160%; box-sizing: content-box; margin: 15px 0; border-left: 4px solid #ddd; padding: 0 15px; color: #777;">
    <h4 style="line-height: 160%; box-sizing: content-box; font-size: 20px; color: #333; margin-top: 0; margin-bottom: 0;">待完成</h4>
    </blockquote>
    <blockquote style="line-height: 160%; box-sizing: content-box; margin: 15px 0; border-left: 4px solid #ddd; padding: 0 15px; color: #777;">
    <h4 style="line-height: 160%; box-sizing: content-box; font-size: 20px; color: #333; margin-top: 0; margin-bottom: 0;">疑问</h4>
    </blockquote>
    <ul style="line-height: 160%; box-sizing: content-box; display: block; list-style-type: disc; padding-left: 30px; margin: 6px 0 10px; color: #333;">
    <li style="line-height: 160%; box-sizing: content-box; position: relative;">设置押金位置？在借阅管设置？</li>
    <li style="line-height: 160%; box-sizing: content-box; position: relative;"><s style="line-height: 160%; box-sizing: content-box;">d_book_list-&gt;id能对应到不同借阅管</s></li>
    </ul>
    <blockquote style="line-height: 160%; box-sizing: content-box; margin: 15px 0; border-left: 4px solid #ddd; padding: 0 15px; color: #777;">
    <h4 style="line-height: 160%; box-sizing: content-box; font-size: 20px; color: #333; margin-top: 0; margin-bottom: 0;">note</h4>
    </blockquote>
    <ul style="line-height: 160%; box-sizing: content-box; display: block; list-style-type: disc; padding-left: 30px; margin: 6px 0 10px; color: #333;">
    <li style="line-height: 160%; box-sizing: content-box; position: relative; border: 0; list-style: none; padding-left: 22px; margin-left: -22px; background-repeat: no-repeat; background-size: 16px 16px; background-position: 0 2px; background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAXZJREFUOBFj1N2b8J+BioCJimaBjRrGBipwSTBsNG9j8BK3QAk1FhQekRxxdiGGWQYlDHws3AyXPt1F0UVyGAqx8jLMNixlkOAQZmi/vZThyffX5BvIx8LFMAtoGMi7u16dZtj4/AiKYSAO0S7kZuZgmG5QzKDGI8vw4sdbhqYbCzAMw2pgu1YaOLBBGmGAC2SYfhGDLp8Sw7///xgqr81i+PTnG0wahcZwoamgBoMityTDIqMqBjcxUwYBVh5wmBkIqII1znm4leHsh1sohiBzGNGzno2wHsMk3TwGFiZmsLrvf38ycDKzg9mXPt5liD/XxvAX6EpcAMOFR95eYmi6uRCuHmbY1z/fGSquzsRrGEgThoEgwQ3PDzNMvbcexISDlpuLGZ78QE0icEkkBlYDQfIzH2xiWPP0IFjppudHGba+PI6kDTcTIwyRlTIyMDKYC2oynP5wg6BXYfrwZr3/DP8ZTry/BlNLFI3Ty0TpxqJo8BsIAJb6a36woPwwAAAAAElFTkSuQmCC');"> d_library需要新增字段deposit_amout(押金额度)</li>
    <li style="line-height: 160%; box-sizing: content-box; position: relative; border: 0; list-style: none; padding-left: 22px; margin-left: -22px; background-repeat: no-repeat; background-size: 16px 16px; background-position: 0 2px; background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAXZJREFUOBFj1N2b8J+BioCJimaBjRrGBipwSTBsNG9j8BK3QAk1FhQekRxxdiGGWQYlDHws3AyXPt1F0UVyGAqx8jLMNixlkOAQZmi/vZThyffX5BvIx8LFMAtoGMi7u16dZtj4/AiKYSAO0S7kZuZgmG5QzKDGI8vw4sdbhqYbCzAMw2pgu1YaOLBBGmGAC2SYfhGDLp8Sw7///xgqr81i+PTnG0wahcZwoamgBoMityTDIqMqBjcxUwYBVh5wmBkIqII1znm4leHsh1sohiBzGNGzno2wHsMk3TwGFiZmsLrvf38ycDKzg9mXPt5liD/XxvAX6EpcAMOFR95eYmi6uRCuHmbY1z/fGSquzsRrGEgThoEgwQ3PDzNMvbcexISDlpuLGZ78QE0icEkkBlYDQfIzH2xiWPP0IFjppudHGba+PI6kDTcTIwyRlTIyMDKYC2oynP5wg6BXYfrwZr3/DP8ZTry/BlNLFI3Ty0TpxqJo8BsIAJb6a36woPwwAAAAAElFTkSuQmCC');"> 新增表d_deposit</li>
    <li style="line-height: 160%; box-sizing: content-box; position: relative; border: 0; list-style: none; padding-left: 22px; margin-left: -22px; background-repeat: no-repeat; background-size: 16px 16px; background-position: 0 2px; background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAXZJREFUOBFj1N2b8J+BioCJimaBjRrGBipwSTBsNG9j8BK3QAk1FhQekRxxdiGGWQYlDHws3AyXPt1F0UVyGAqx8jLMNixlkOAQZmi/vZThyffX5BvIx8LFMAtoGMi7u16dZtj4/AiKYSAO0S7kZuZgmG5QzKDGI8vw4sdbhqYbCzAMw2pgu1YaOLBBGmGAC2SYfhGDLp8Sw7///xgqr81i+PTnG0wahcZwoamgBoMityTDIqMqBjcxUwYBVh5wmBkIqII1znm4leHsh1sohiBzGNGzno2wHsMk3TwGFiZmsLrvf38ycDKzg9mXPt5liD/XxvAX6EpcAMOFR95eYmi6uRCuHmbY1z/fGSquzsRrGEgThoEgwQ3PDzNMvbcexISDlpuLGZ78QE0icEkkBlYDQfIzH2xiWPP0IFjppudHGba+PI6kDTcTIwyRlTIyMDKYC2oynP5wg6BXYfrwZr3/DP8ZTry/BlNLFI3Ty0TpxqJo8BsIAJb6a36woPwwAAAAAElFTkSuQmCC');"> 判断是否需要缴纳押金：通过book_id查book_list表查到user_id（addLendLog-&gt; line855）,通过user_id查d_library表返回是否需要缴纳押金</li>
    <li style="line-height: 160%; box-sizing: content-box; position: relative; border: 0; list-style: none; padding-left: 22px; margin-left: -22px; background-repeat: no-repeat; background-size: 16px 16px; background-position: 0 2px; background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAAXNSR0IArs4c6QAAADdJREFUKBVjvHv37n8GMgALSI+SkhJJWu/du8fARJIOJMWjGpECA505GjjoIYLEB6dVUNojFQAA/1MJUFWet/4AAAAASUVORK5CYII=');"> 再跳转到付押金页面前应该检查书的状态</li>
    <li style="line-height: 160%; box-sizing: content-box; position: relative; border: 0; list-style: none; padding-left: 22px; margin-left: -22px; background-repeat: no-repeat; background-size: 16px 16px; background-position: 0 2px; background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAAXNSR0IArs4c6QAAADdJREFUKBVjvHv37n8GMgALSI+SkhJJWu/du8fARJIOJMWjGpECA505GjjoIYLEB6dVUNojFQAA/1MJUFWet/4AAAAASUVORK5CYII=');"> 检查表的时间类型</li>
    </ul>
    <blockquote style="line-height: 160%; box-sizing: content-box; margin: 15px 0; border-left: 4px solid #ddd; padding: 0 15px; color: #777;">
    <h4 style="line-height: 160%; box-sizing: content-box; font-size: 20px; color: #333; margin-top: 0; margin-bottom: 0;">source</h4>
    </blockquote>
    <ul style="line-height: 160%; box-sizing: content-box; display: block; list-style-type: disc; padding-left: 30px; margin: 6px 0 10px; color: #333;">
    <li style="line-height: 160%; box-sizing: content-box; position: relative;">(支付api)http://wiki.bravetime.net/pages/viewpage.action?pageId=20906250</li>
    </ul>
    </div><center style="display:none !important;visibility:collapse !important;height:0 !important;white-space:nowrap;width:100%;overflow:hidden">%23%23%23%20%E6%AF%8F%E6%97%A5%E6%95%85%E4%BA%8B%E6%8E%A8%E9%80%81%EF%BC%8820181205%EF%BC%89%0A%0A%3E%20%23%23%23%20%E7%96%91%E9%97%AE%0A*%20%E5%A6%82%E6%9E%9C%E6%8E%A8%E9%80%81%E7%9B%AE%E6%A0%87%E6%98%AF%E9%A6%86%E9%95%BF%EF%BC%8C%E7%9B%B4%E6%8E%A5%E6%8E%A8%E9%80%81%E8%B7%B3%E8%BD%AC%E5%88%B0%E9%A6%86%E9%95%BF%E8%87%AA%E5%B7%B1%E7%9A%84%E5%80%9F%E9%98%85%E7%AE%A1%EF%BC%8C%E5%A6%82%E6%9E%9C%E4%B8%8D%E6%98%AF%E9%A6%86%E9%95%BF%EF%BC%8C%E6%8E%A8%E5%8A%A8%E5%88%B0%E7%9B%AE%E6%A0%87%E5%80%9F%E9%98%85%E7%AE%A1%EF%BC%9F%0A*%20%3Cu%3E%20%E6%AF%8F%E6%99%9A8%E7%82%B9%E5%AE%9A%E6%97%B6%E6%8E%A8%E9%80%81%E6%89%80%E6%9C%89%E6%89%93%E5%BC%80%E8%BF%87%E6%95%85%E4%BA%8B%E9%A1%B5%E9%9D%A2%E7%9A%84%E7%94%A8%E6%88%B7%20%2B%20%E9%9D%9E%E5%88%86%E7%B1%BB%E7%9A%84%E7%94%A8%E6%88%B7%EF%BC%9F%3C%2Fu%3E%20%E9%9D%9E%E5%88%86%E7%B1%BB%EF%BC%9F%E5%B8%8C%E6%9C%9B%E8%A2%AB%E5%88%86%E4%B8%BA%E5%93%AA%E4%BA%9B%E7%B1%BB%0A%0A%23%23%23%20%E6%89%AB%E7%A0%81%E4%B8%8A%E6%9E%B6%20%EF%BC%8820181116%EF%BC%89%0A%0A%3E%20%23%23%23%23%20%E7%96%91%E9%97%AE%0A*%20%E6%89%AB%E7%A0%81%E6%96%B0%E5%A2%9E%E7%9A%84%E4%B9%A6%E6%98%AF%E5%90%A6%E7%9B%B4%E6%8E%A5%E6%8F%92%E5%85%A5d_book_list%EF%BC%8C%E5%A6%82%E6%9E%9C%E6%98%AFd_book_list%E9%9C%80%E8%A6%81%E6%96%B0%E5%A2%9E%E5%AD%97%E6%AE%B5%EF%BC%8C%E5%90%A6%E5%88%99%EF%BC%8C%E6%96%B0%E5%A2%9E%E4%B8%93%E7%94%A8%E4%BA%8E%E6%96%B0%E5%A2%9E%E6%89%AB%E7%A0%81%E7%9A%84%E7%9A%84%E8%A1%A8%EF%BC%8Cd_book_list%E4%B8%AD%E5%8F%AA%E5%AD%98%E9%83%A8%E5%88%86%E4%BF%A1%E6%81%AF%0A%0A%0A%23%23%23%20%E6%8A%BC%E9%87%91%E6%A8%A1%E5%9D%97%20%EF%BC%8820181107%EF%BC%89%0A%0A%3E%20%23%23%23%23%20%E5%BE%85%E5%AE%8C%E6%88%90%0A%0A%3E%20%23%23%23%23%20%E7%96%91%E9%97%AE%0A*%20%E8%AE%BE%E7%BD%AE%E6%8A%BC%E9%87%91%E4%BD%8D%E7%BD%AE%EF%BC%9F%E5%9C%A8%E5%80%9F%E9%98%85%E7%AE%A1%E8%AE%BE%E7%BD%AE%EF%BC%9F%0A*%20~~d_book_list-%3Eid%E8%83%BD%E5%AF%B9%E5%BA%94%E5%88%B0%E4%B8%8D%E5%90%8C%E5%80%9F%E9%98%85%E7%AE%A1~~%0A%0A%0A%3E%20%23%23%23%23%20note%0A*%20%5Bx%5D%20d_library%E9%9C%80%E8%A6%81%E6%96%B0%E5%A2%9E%E5%AD%97%E6%AE%B5deposit_amout(%E6%8A%BC%E9%87%91%E9%A2%9D%E5%BA%A6)%0A*%20%5Bx%5D%20%E6%96%B0%E5%A2%9E%E8%A1%A8d_deposit%0A*%20%5Bx%5D%20%E5%88%A4%E6%96%AD%E6%98%AF%E5%90%A6%E9%9C%80%E8%A6%81%E7%BC%B4%E7%BA%B3%E6%8A%BC%E9%87%91%EF%BC%9A%E9%80%9A%E8%BF%87book_id%E6%9F%A5book_list%E8%A1%A8%E6%9F%A5%E5%88%B0user_id%EF%BC%88addLendLog-%3E%20line855%EF%BC%89%2C%E9%80%9A%E8%BF%87user_id%E6%9F%A5d_library%E8%A1%A8%E8%BF%94%E5%9B%9E%E6%98%AF%E5%90%A6%E9%9C%80%E8%A6%81%E7%BC%B4%E7%BA%B3%E6%8A%BC%E9%87%91%0A*%20%5B%20%5D%20%E5%86%8D%E8%B7%B3%E8%BD%AC%E5%88%B0%E4%BB%98%E6%8A%BC%E9%87%91%E9%A1%B5%E9%9D%A2%E5%89%8D%E5%BA%94%E8%AF%A5%E6%A3%80%E6%9F%A5%E4%B9%A6%E7%9A%84%E7%8A%B6%E6%80%81%0A*%20%5B%20%5D%20%E6%A3%80%E6%9F%A5%E8%A1%A8%E7%9A%84%E6%97%B6%E9%97%B4%E7%B1%BB%E5%9E%8B%0A%0A%0A%3E%20%23%23%23%23%20source%0A*%20(%E6%94%AF%E4%BB%98api)http%3A%2F%2Fwiki.bravetime.net%2Fpages%2Fviewpage.action%3FpageId%3D20906250%0A%0A%0A%0A</center>`
    res.json({
      html: html,msg: 'ok'})
         
          
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
}
