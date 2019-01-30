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