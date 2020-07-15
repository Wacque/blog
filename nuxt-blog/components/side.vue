<template>
  <div id="side" class="fontLight">
    <div class="side-inner">
      <div class="logo  font-6-14 flexCenter ">
        <span class="logoInner OnepxLineB">ACQUE</span>
      </div>
      <div class="content">
        <ul>
          <li class="font-6-13" :key='index' v-for="(item, index) in sheetOne">
            <div>
              <a href="/">{{item.name}}</a>
            </div>
          </li>
        </ul>
        <ul>
          <li class="font-6-13" :key='index' v-for="(item, index) in cates">
            <a :href="'/' + item.name">{{item.name}}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      cates: Array
    },

    data() {
      return {
        sheetOne: [
          {name: '全部文章', to: '/'},
        ]
      }
    },

    created() {
      console.log(this.cates[0].name)
    }
  }
</script>
<style lang="stylus">
  #side
    width 100px
    letter-spacing 1.5px
    font-family din !important
    position relative
    .side-inner
      position fixed
      top 0
      left 0
      bottom 0
      margin auto

    .content
      ul
        margin-bottom 3rem

        li
          width 100%
          text-align right
          margin 1.5rem 0

          a
            color black

          .nuxt-link-exact-active
            color red

    .logo
      width 100px
      height 70px
      margin auto
      justify-content flex-end
      letter-spacing 3px

      .logoInner
        &::after
          bottom -1.6rem
          left auto
          right 0
</style>
