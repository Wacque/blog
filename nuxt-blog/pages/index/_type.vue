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
  async asyncData({ params, $axios }) {
    const result = await $axios.$get(`/getArticle?type=${params.type}`)
    return {
      type : 'hello'
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
