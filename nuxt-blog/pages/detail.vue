<template>
  <div class="" id="detail">
    <div class="title">
    </div>
    <div  class="content font-6-14">
      <div v-html="html"></div>
    </div>
  </div>
</template>
<script>
const marked = require('marked')
export default {
  async asyncData({ $axios }) {
    const ip = await $axios.$get('http://192.168.2.180:3000/getdetail')
    const html = marked(ip.html);
    return {html}
  }
}
</script>
<style lang="stylus" >
#detail
  padding 1.5rem
  box-sizing border-box
  max-width 640px
  margin auto
  background rgba(233,233,233,0.1)
  min-height 100vh
p
  color red
*  
  word-break:break-all
img
  display block
  width 100%
h3
  font-size 2rem!important
h4
  font-size 1.7rem!important
li
  font-size 1.4rem!important


</style>

