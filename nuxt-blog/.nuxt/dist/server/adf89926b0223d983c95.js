exports.ids=[2],exports.modules={46:function(t,e,n){var content=n(53);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var r=n(3).default;t.exports.__inject__=function(t){r("0a7a9a1e",content,!0,t)}},52:function(t,e,n){"use strict";n.r(e);var r=n(46),o=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,function(){return r[t]})}(c);e.default=o.a},53:function(t,e,n){(t.exports=n(2)(!1)).push([t.i,"#detail .title{font-size:4rem;text-transform:uppercase;margin:1rem 0 1.5rem;padding:0 0 1rem}#detail .title:after{-webkit-transform:scaleY(.6);transform:scaleY(.6);border-color:#2c3f51}",""])},63:function(t,e,n){"use strict";n.r(e);var r={components:{Back:n(11).a},async asyncData({params:t,$axios:e}){const n=await e.$get("/getdetail?id="+t.id);return console.log(n.data.results),{detailData:n.data.results[0]}}},o=n(1);var component=Object(o.a)(r,function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:"detail "}},[this._ssrNode('<div class="title font-6-20 one-px-bottom fontBold"><span>'+this._ssrEscape(this._s(this.detailData.name))+'</span></div> <div class="content font-6-14"><div class="bin">'+this._s(this.detailData.content)+"</div></div>")])},[],!1,function(t){var e=n(52);e.__inject__&&e.__inject__(t)},null,"5d492d47");e.default=component.exports}};
//# sourceMappingURL=adf89926b0223d983c95.js.map