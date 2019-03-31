<template>
  <div class="" id="detail">
    <back style="opacity: 0.2"/>
    <nuxt/>
  </div>
</template>
<script>
import Back from '~/components/blog-back.vue'  
export default {
  components: {
    Back
  }
}
</script>
<style lang="stylus" >
#detail
  padding 1.5rem
  box-sizing border-box
  max-width 640px
  margin auto
  background rgba(233,233,233,0.1)
  min-height 100vh
  .content
    font-size 1.7rem
    // font-style italic
  img
    display block
    width 100%
  h3
    font-size 2rem!important
  h4
    font-size 1.7rem!important
  li
    font-size 1.4rem!important
  // *  
  //   word-break:break-all




</style>

