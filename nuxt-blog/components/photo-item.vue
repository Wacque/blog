<template>
  <div>
    <div v-for='(item1,index1) in imgsData' :key='index1' class="section">
      <div class="date font-6-16 din">
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
            },
            {
              src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554048776727&di=c4f7b4ab773adbf89b4c6fcf1d873df9&imgtype=0&src=http%3A%2F%2Fwww.goupuzi.com%2Fnewatt%2FMon_1810%2F1_177922_7b827fc5298cf03.jpg'
            },{
              src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554048776727&di=c4f7b4ab773adbf89b4c6fcf1d873df9&imgtype=0&src=http%3A%2F%2Fwww.goupuzi.com%2Fnewatt%2FMon_1810%2F1_177922_7b827fc5298cf03.jpg'
            }
          ]
        },
        {
          date: '2019-03-01',
          imgs: [
            {
              src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554048776727&di=c4f7b4ab773adbf89b4c6fcf1d873df9&imgtype=0&src=http%3A%2F%2Fwww.goupuzi.com%2Fnewatt%2FMon_1810%2F1_177922_7b827fc5298cf03.jpg'
            },
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
            },{
              src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554048776727&di=c4f7b4ab773adbf89b4c6fcf1d873df9&imgtype=0&src=http%3A%2F%2Fwww.goupuzi.com%2Fnewatt%2FMon_1810%2F1_177922_7b827fc5298cf03.jpg'
            },{
              src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554048776727&di=c4f7b4ab773adbf89b4c6fcf1d873df9&imgtype=0&src=http%3A%2F%2Fwww.goupuzi.com%2Fnewatt%2FMon_1810%2F1_177922_7b827fc5298cf03.jpg'
            },{
              src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554048776727&di=c4f7b4ab773adbf89b4c6fcf1d873df9&imgtype=0&src=http%3A%2F%2Fwww.goupuzi.com%2Fnewatt%2FMon_1810%2F1_177922_7b827fc5298cf03.jpg'
            },{
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
<style lang="stylus">
  .section
    margin 1.35rem 0 3rem 0
  .date
    margin-bottom 1rem
    position relative
    padding-left 1rem
    &::before
      position absolute
      display block
      content ""
      width 0px
      height 4px
      left 0
      top 0
      bottom 0
      margin auto
      border-left 4px solid rgba(255,0,0,0.3)
  .imgs
    img 
      display block
      width 100%
      max-width 500px
</style>