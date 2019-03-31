<template>
    <div class="main">
      <nuxt/>
    </div>
</template>

<script>
export default {
  layout: 'blog',
  components: {
  },
  head () {
    return {
      title: 'wuacque.cn',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'wuacque.cn' }
      ]
    }
  }
}
</script>

<style lang='stylus'>
.container 
  display flex
  min-height 100vh
  width 100%
  .main
    width calc(100% - 100px)
    position relative
    left 100px
    padding 0 0.5rem 2.32rem 2.32rem
    box-sizing border-box
    height 100vh
    overflow-y scroll
    -webkit-overflow-scrolling touch

@media screen and (min-width 640px) 
  .main
    padding-left 5rem
</style>
