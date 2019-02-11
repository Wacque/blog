<template>
  <div>
    <div class="type font-6-16 din">
      {{type}}
    </div>
    <div class="article-items">
        <articles :articlesData='data'/>
    </div>
  </div>
</template>
<script>
import Articles from '~/components/article.vue'
export default {
  components: {
    Articles
  },
  async asyncData({ params, $axios }) {
    let type = ''
    if(params.type) {
       type = params.type
    }else {
       type = '全部文章'
    }
    console.log(type)
    //const result = await $axios.$get(`/getArticle?type=${type == '全部文章' ? '' : type}`)
    return {
      type: type,
      data: []
      // result.data.results
    }
  }
}
</script>
<style lang="stylus">
  .type
    height 70px
    width 100%
    line-height 70px
</style>
