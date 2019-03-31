<template>
  <div>
    <div v-for='(item1,index1) in imgsData' :key='index1' class="section">
      <div class="date">
        {{item1.date}}
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
      // imgsData: [
      //   {
      //     date: '2019-03-01',
      //     imgs: {
      //       imgs: ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554048776727&di=c4f7b4ab773adbf89b4c6fcf1d873df9&imgtype=0&src=http%3A%2F%2Fwww.goupuzi.com%2Fnewatt%2FMon_1810%2F1_177922_7b827fc5298cf03.jpg']
      //     }
      //   }
        
      // ]
      
    }
  },
  created() {
    console.log(this.imgsData)
  },
  props: {
    imgsData: {
      type: Array,
      default: [
        {
          date: '2019-03-01',
          imgs: [
            {
              src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554048776727&di=c4f7b4ab773adbf89b4c6fcf1d873df9&imgtype=0&src=http%3A%2F%2Fwww.goupuzi.com%2Fnewatt%2FMon_1810%2F1_177922_7b827fc5298cf03.jpg'
            }
          ]
        },
        {
          date: '2019-03-01',
          imgs: [
            {
              src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554048776727&di=c4f7b4ab773adbf89b4c6fcf1d873df9&imgtype=0&src=http%3A%2F%2Fwww.goupuzi.com%2Fnewatt%2FMon_1810%2F1_177922_7b827fc5298cf03.jpg'
            }
          ]
        },
      ]
    }
  }
}
</script>