<template>
  <div>
    <div class="type font-6-16 din">
      {{type}}
    </div>
    <div class="article-items">
        <articles />
    </div>
  </div>
</template>
<script>
import Articles from '~/components/article.vue'
export default {
  components: {
    Articles
  },
  asyncData ({params}) {
    if(!!params.type) {
      return params
    }else {
      return {
        type: '全部文章'
      }
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
