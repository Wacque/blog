<template>
  <div class="admin-index">
    <nuxt-link :key="index" v-for="(item, index) in data" :to="'/admin/editor/' + item.id">
        <div class="item">
          <div class="id font-6-12">
            id: {{item.id}}
          </div>
          <div class="name font-6-16 fontBold">
            name: {{item.title}}
          </div>
          <div class="create-time font-6-12">
            create time: {{item.create_time}}
          </div>
        </div>
    </nuxt-link>
  </div>
</template>
<script>
import axios from '~/plugins/axios'
export default {
  async asyncData({ params, $axios }) {
    const result = await axios.get(`/index/articles/get_article_list?type=`)
    console.log(result.data.data.results)
    return {
      data: result.data.data.results
    }
  }
}
</script>
<style lang="stylus">
.admin-index
  padding 2rem
  box-sizing border-box
.item
  height 6rem
  margin-bottom 2rem
  border-bottom 1px solid lightblue
  & > div
    height 2rem
</style>
