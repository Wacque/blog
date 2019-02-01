<template>
  <div>
    <div class="title"></div>
    <div class="content font-6-14">
      <div class="bin" v-html="html"></div>
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
    const html = result.html;
    return { html };
  }
};
</script>

