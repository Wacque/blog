<template>
  <div class="main">
    <Side :cates="cates"></Side>
    <div id="main-content-box">
      <nuxt-child/>
    </div>
    <Back></Back>
  </div>
</template>

<script>
  import Side from '~/components/side.vue'
  import Back from '~/components/blog-back.vue'

  export default {
    components: {
      Side,
      Back
    },

    async asyncData({$axios}) {
      const cates = await $axios('/index/category/get_cate')
      console.log(cates.data.data.results)

      return {
        cates: cates.data.data.results
      }
    },

    head() {
      return {
        title: 'wuacque.cn',
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          {hid: 'description', name: 'description', content: 'wuacque.cn'}
        ]
      }
    }
  }
</script>

<style lang='stylus'>

  .main
    display flex
    justify-content space-between
    width 100%
    #main-content-box
      flex 1
      padding 2rem 1.2rem
      box-sizing border-box
      height 2000px
  // overflow-y scroll
  // -webkit-overflow-scrolling touch

</style>
