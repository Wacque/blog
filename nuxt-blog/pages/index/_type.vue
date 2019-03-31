<template>
  <div>
    <div class="type font-6-16 din">
      {{type}}
    </div>
    <div v-if="type == 'About Life'" class="photos">
      <photo-item />
    </div>
    <div v-else class="article-items">
        <articles :articlesData='data'/>
    </div>
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
    let type = ''
    if(params.type) {
       type = params.type
    }

    if(type !== 'About Life') {
      const result = await axios.get(`/articles/get_article_list?type=${type}`)
      return {
        type: type,
        data: result.data.data.results
      }
    } else {
      return {
        type: type,
      }
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
