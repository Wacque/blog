<template>
  <div>
    <div v-for='(item1,index1) in imgsData' :key='index1' class="section">
      <div class="date">
        {{item1.data}}
      </div>
      <div v-for="(item2,key2) in item1.imgs" :key='key2' class="imgs">
        <div class="img">
          <img :src="item2.src" :alt="item1.data">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  props: {
    imgsData: {
      type: Array,
      default: []
    }
  }
}
</script>