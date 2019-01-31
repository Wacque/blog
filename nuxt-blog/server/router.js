const axios = require('axios')
const mongoAction = require('./model/mongoModel')
const mysqlAction = require('./model/mysqlModel')

exports.articleDetail = (req, res, next) => {
    axios.get('http://api.xieyanjun.com/article/view-ajax?id=5')
      .then(function (response) {
          // handle success
          const html = `<del style="position:relative;display:block;z-index:10;"><a style="position: absolute;color: #FFF;text-decoration: none;font-size: 12px;height: 25px;border-radius: 0;margin-top: -20px;right: 15px;background: rgba(0, 0, 0, 0);border-left: 10px solid #BB3A34;border-right: 10px solid #BB3A34;border-bottom: 5px solid rgba(0, 0, 0, 0);width: 0;text-indent:-100000px;" href="http://maxiang.io/#/?provider=evernote&amp;guid=4271b672-2827-4d3f-b691-f638a81818b3&amp;notebook=%E6%88%91%E7%9A%84%E7%AC%AC%E4%B8%80%E4%B8%AA%E7%AC%94%E8%AE%B0%E6%9C%AC">Edit</a></del><div style="color: #2c3f51; line-height: 1.6;">
                        
                    

          <p style="margin: 0 0 1.1em; line-height: 1.6;"><i style="line-height: 1.6;">  Youth is not a time of life; it is a state of mind; it is not a matter of rosy cheeks, red lips and supple knees; it is a matter of the will, a quality of the imagination, a vigor of the emotions; it is the freshness of the deep springs of life.<i style="line-height: 1.6;"/></i></p><p style="margin: 0 0 1.1em; line-height: 1.6;"><i style="line-height: 1.6;"
          /></p><p style="margin: 0 0 1.1em; line-height: 1.6;"><i style="line-height: 1.6;"><i style="line-height: 1.6;">  Youth means a temperamental predominance of courage over timidity, of the appetite for adventure over the love of ease. This often exists in a man of sixty more than a boy of twenty. Nobody grows old merely by a number of years. We grow old by deserting our ideals.<i style="line-height: 1.6;"/></i></i></p><i style="line-height: 1.6;"><i style="line-height: 1.6;">
          
          <p style="margin: 0 0 1.1em; line-height: 1.6;"><i style="line-height: 1.6;">  Years may wrinkle the skin, but to give up enthusiasm wrinkles the soul.  Worry, fear, self-distrust bows the heart and turns the spirit back to dust.<i style="line-height: 1.6;"/></i></p><i style="line-height: 1.6;">
          
          <p style="margin: 0 0 1.1em; line-height: 1.6;"><i style="line-height: 1.6;">  Whether sixty or sixteen, there is in every human being’s heart the lure of wonder, the unfailing child-like appetite of what’s next, and the joy of the game of living.  In the center of your heart and my heart there is a wireless station; so long as it receives messages of beauty, hope, cheer, courage and power from men and from the Infinite, so long are you young.<i style="line-height: 1.6;"/></i></p><i style="line-height: 1.6;">
          
          <p style="margin: 0 0 1.1em; line-height: 1.6;"><i style="line-height: 1.6;">  When the aerials are down, and your spirit is covered with snows of cynicism and the ice of pessimism, then you are grown old, even at twenty, but as long as your aerials are up, to catch the waves of optimism, there is hope you may die young at eighty.<i style="line-height: 1.6;"/></i></p></i></i></i></i></div><center style="display:none !important;visibility:collapse !important;height:0 !important;white-space:nowrap;width:100%;overflow:hidden">%3Cp%3E%3Ci%3E%26emsp%3B%26emsp%3BYouth%20is%20not%20a%20time%20of%20life%3B%20it%20is%20a%20state%20of%20mind%3B%20it%20is%20not%20a%20matter%20of%20rosy%20cheeks%2C%20red%20lips%20and%20supple%20knees%3B%20it%20is%20a%20matter%20of%20the%20will%2C%20a%20quality%20of%20the%20imagination%2C%20a%20vigor%20of%20the%20emotions%3B%20it%20is%20the%20freshness%20of%20the%20deep%20springs%20of%20life.%3Ci/%3E%3Cp/%3E%0A%3Cp%3E%3Ci%3E%26emsp%3B%26emsp%3BYouth%20means%20a%20temperamental%20predominance%20of%20courage%20over%20timidity%2C%20of%20the%20appetite%20for%20adventure%20over%20the%20love%20of%20ease.%20This%20often%20exists%20in%20a%20man%20of%20sixty%20more%20than%20a%20boy%20of%20twenty.%20Nobody%20grows%20old%20merely%20by%20a%20number%20of%20years.%20We%20grow%20old%20by%20deserting%20our%20ideals.%3Ci/%3E%3C/p%3E%0A%3Cp%3E%3Ci%3E%26emsp%3B%26emsp%3BYears%20may%20wrinkle%20the%20skin%2C%20but%20to%20give%20up%20enthusiasm%20wrinkles%20the%20soul.%20%20Worry%2C%20fear%2C%20self-distrust%20bows%20the%20heart%20and%20turns%20the%20spirit%20back%20to%20dust.%3Ci/%3E%3C/p%3E%0A%3Cp%3E%3Ci%3E%26emsp%3B%26emsp%3BWhether%20sixty%20or%20sixteen%2C%20there%20is%20in%20every%20human%20being%27s%20heart%20the%20lure%20of%20wonder%2C%20the%20unfailing%20child-like%20appetite%20of%20what%27s%20next%2C%20and%20the%20joy%20of%20the%20game%20of%20living.%20%20In%20the%20center%20of%20your%20heart%20and%20my%20heart%20there%20is%20a%20wireless%20station%3B%20so%20long%20as%20it%20receives%20messages%20of%20beauty%2C%20hope%2C%20cheer%2C%20courage%20and%20power%20from%20men%20and%20from%20the%20Infinite%2C%20so%20long%20are%20you%20young.%3Ci/%3E%3C/p%3E%0A%3Cp%3E%3Ci%3E%26emsp%3B%26emsp%3BWhen%20the%20aerials%20are%20down%2C%20and%20your%20spirit%20is%20covered%20with%20snows%20of%20cynicism%20and%20the%20ice%20of%20pessimism%2C%20then%20you%20are%20grown%20old%2C%20even%20at%20twenty%2C%20but%20as%20long%20as%20your%20aerials%20are%20up%2C%20to%20catch%20the%20waves%20of%20optimism%2C%20there%20is%20hope%20you%20may%20die%20young%20at%20eighty.%3Ci/%3E%3C/p%3E%0A</center><br/>`
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

exports.getArticle = (req, res, next) => {
  console.log(req.query.type)
  res.end()
  mysqlAction.getArticle(req.query.type)
}
