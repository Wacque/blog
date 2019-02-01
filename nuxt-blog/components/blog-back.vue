<template>
  <div class="blog-back">
    <div class="back-item" :class="'back-item-' + (index + 1)" :key='index' v-for='(item,index) in imgs'  >
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      imgs: [1, 2, 3, 4]
    }
  }
}
</script>
<style lang="stylus">
@media screen and (max-width 1500px) 
  .blog-back
    opacity 0.5
    .back-item-6
      opacity 0
@media screen and (max-width 767px) 
  .blog-back
    opacity 0.4
    .back-item-4,.back-item-3,.back-item-5
      opacity 0
@media screen and (max-width 479px) 
  .blog-back
    opacity 0.4
    .back-item-2
      opacity 0

.blog-back
  position relative
  z-index -1
.back-item
  position fixed
  right 0
  bottom 0
  width 80rem
  height 60rem
  background-repeat no-repeat
  background-size contain
for prop in 1 2 3 4 5 6
  .back-item-{prop}
    opacity 0.5
    transition all 1s
    background-image url("../assets/images/bg-" + prop + ".png" )
    


</style>
