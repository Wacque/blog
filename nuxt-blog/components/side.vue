<template>
  <div id="side" class="fontLight">
    <div class="logo  font-6-14 flexCenter ">
      <span class="logoInner OnepxLineB">ACQUE</span>
    </div>
    <div class="content">
      <ul>
        <li class="font-6-13" :key='index' v-for="(item, index) in content.sheetOne">
          <nuxt-link :to="item.to">
            {{item.title}}
          </nuxt-link>
        </li>
      </ul>
      <ul>
        <li class="font-6-13" :key='index' v-for="(item, index) in content.sheetTwo">
          <nuxt-link :to="item.to">
            {{item.title}}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return { 
        content: {
          sheetOne: [
            {title: '全部文章', to: '/'}, 
            {title: 'About Life', to: '/About Life'}
          ] ,
          sheetTwo: [
            {title: 'Css', to: '/Css'}, 
            {title: 'Js', to: '/Js'},
            {title: 'Node', to: '/Node'},
            {title: 'Php', to: '/Php'}
          ]
        }
    }
  }
}
</script>
<style lang="stylus">
#side 
  flex 0 0 100px
  height 100vh
  letter-spacing 1.5px
  font-family din !important
  position fixed
  top 0
  left 0
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
