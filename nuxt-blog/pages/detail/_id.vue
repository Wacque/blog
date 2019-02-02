<template>
  <div id="detail ">
    <div class="title font-6-20 one-px-bottom fontBold">
      <span >{{detailData.name}}</span>
    </div>
    <div class="content font-6-14">
      <div class="bin" v-html="detailData.content"></div>
    </div>
  </div>
</template>
<script>
import Back from "~/components/blog-back.vue";
export default {
  components: {
    Back
  },
  async asyncData({ params, $axios }) {
    const result = await $axios.$get("/getdetail?id=" + params.id);
    console.log(result.data.results)
    const detailData = result.data.results[0];
    return { detailData };
  }
};
</script>
<style lang="stylus">
#detail
  .title 
    font-size 4rem
    text-transform uppercase
    margin 1rem 0 1.5rem 0
    padding 0 0 1rem 0
    &::after
      transform scaleY(0.6)
      border-color #2c3f51
    
</style>


