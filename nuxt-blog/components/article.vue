<template>
  <div>
    <div class="article-item" :key='index' v-for='(item,index) in articlesData'>
      <nuxt-link :to="'/detail/' + item.id" >
        <div class="title  font-6-16 fontBold">{{item.name}}</div>
        <div class="content">
          <div class="img">
            <img src="../assets/images/logo.jpeg" alt>
          </div>
          <div class="desc flexCenter">
            <div class=" fontItalic font-6-16 ">
              <span v-if="index % 2 == 0">青春不是生命中的一段时光，他是一种心态，是不玫瑰一样的面容</span>
              <span v-else>youth is not a time of life,it's a state of mind,it's not a matte of rosy..</span>
              </div>
          </div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
    };
  },
  props: {
    articlesData: {
      type: Array,
      default: []
    }
  },
  created() {
  },
};
</script>
<style lang="stylus" scoped>
.article-item 
  max-width: 700px;
  margin-top: 1.35rem;
  margin-bottom 3rem

  .title 
    padding-bottom: 1.5rem;

  .content 
    .img 
      flex: 0 0 12rem;
      width: 12rem;
      height: 12rem;
      overflow: hidden;

      img 
        display: block;
        width: 100%;

    .desc 
      box-sizing: border-box;
      line-height: 2rem;
      padding-top: 1.3rem;

@media screen and (min-width: 640px) 
  .content 
    display: flex;
    align-items: flex-start;

    .desc 
      padding-left: 1.5rem;
      padding-top: 0;

@media screen and (max-width: 640px) 
  .content 
    .desc 
      font-weight lighter

</style>
