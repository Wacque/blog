(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{186:function(t,e,n){var content=n(193);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("0a7a9a1e",content,!0,{sourceMap:!1})},192:function(t,e,n){"use strict";var r=n(186);n.n(r).a},193:function(t,e,n){(t.exports=n(16)(!1)).push([t.i,"#detail .title{font-size:4rem;text-transform:uppercase;margin:1rem 0 1.5rem;padding:0 0 1rem}#detail .title:after{-webkit-transform:scaleY(.6);transform:scaleY(.6);border-color:#2c3f51}",""])},203:function(t,e,n){"use strict";n.r(e);n(49);var r=n(6),o={components:{Back:n(65).a},asyncData:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(e){var n,r,o,c;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.params,r=e.$axios,t.next=3,r.$get("/getdetail?id="+n.id);case 3:return o=t.sent,console.log(o.data.results),c=o.data.results[0],t.abrupt("return",{detailData:c});case 7:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},c=(n(192),n(5)),component=Object(c.a)(o,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"detail "}},[e("div",{staticClass:"title font-6-20 one-px-bottom fontBold"},[e("span",[this._v(this._s(this.detailData.name))])]),this._v(" "),e("div",{staticClass:"content font-6-14"},[e("div",{staticClass:"bin",domProps:{innerHTML:this._s(this.detailData.content)}})])])},[],!1,null,null,null);e.default=component.exports}}]);