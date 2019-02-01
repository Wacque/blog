<template>
  <div class="container">
    <back/>
    <side/>
    <nuxt/>
  </div>
</template>
<script>
import Side from '~/components/side.vue'
import Back from '~/components/blog-back.vue'    
export default {
  components: {
    Back,
    Side
  }
}
</script>
<style lang="stylus">
html 
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif
  font-size: 16px
  word-spacing: 1px
  -ms-text-size-adjust: 100%
  -webkit-text-size-adjust: 100%
  -moz-osx-font-smoothing: grayscale
  -webkit-font-smoothing: antialiased
  box-sizing: border-box


*,
*:before,
*:after 
  box-sizing: border-box;
  margin: 0;


</style>
