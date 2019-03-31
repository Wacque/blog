<template>
  <div id="detail " >
    <div class="title font-6-20 one-px-bottom fontBold">
      <span >{{detailData.name}}</span>
    </div>
    <div class="content ">
      <div class="bin font-6-16"  v-html="detailData.html"></div>
    </div>
  </div>
</template>
<script>
import Back from "~/components/blog-back.vue";
import axios from '~/plugins/axios'
export default {
  components: {
    Back
  },
  async asyncData({ params, $axios }) {
    // console.log("/articles/get_article_content?name=" + params.name)
    const result = await axios.get("/articles/get_article_content?id=" + params.id);
    const detailData = result.data.data.results;
    // console.log(detailData.name)
    // console.log(detailData.html)
    return {detailData};
  },
  head: {
    script: [
      // { src: '/prism.js' }
    ],
    link: [
      { rel: 'stylesheet', href: '/prism.css' }
    ]
  }
};
</script>
<style lang="stylus" scoped>
.content 
  line-height 180%
#detail
  .title 
    font-size 4rem
    text-transform uppercase
    margin 1rem 0 1rem 0
    padding 0 0 1rem 0
    &::after
      bottom -1rem
      transform scaleY(0.6)
      border-color #2c3f51
    
</style>


