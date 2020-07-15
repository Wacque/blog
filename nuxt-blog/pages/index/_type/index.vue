<template>
  <div>
    ----{{type}}
<!--    <div class="type font-6-16 din">-->
<!--      {{type}}-->
<!--    </div>-->
<!--&lt;!&ndash;    <div v-if="type == 'About Life'" class="photos">&ndash;&gt;-->
<!--&lt;!&ndash;      <photo-item />&ndash;&gt;-->
<!--    </div>-->
<!--        <div v-else class="article-items">-->
<!--            <articles :articlesData='data'/>-->
<!--        </div>-->
  </div>
</template>
<script>
  import Articles from '~/components/article.vue'
  import PhotoItem from '~/components/photo-item.vue'
  import axios from '~/plugins/axios'
  export default {
    components: {
      Articles,
      PhotoItem
    },
    async asyncData({ params, $axios }) {


      // let type = ''
      // if(params.type) {
      //    type = params.type
      // }
      //
      // const result = await axios.get(`/index/articles/get_article_list?type=${type}`)
      // return {
      //   type: type,
      //   data: result.data.data.results
      // }


      return {
        type: params.type
      }
    }
  }
</script>
<style lang="stylus">
  .article-items
    width 100%
  .type
    height 70px
    width 100%
    line-height 70px
</style>
