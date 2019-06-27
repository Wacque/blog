<template>
  <div class="editor-wrap">
    <div class="buttons">
      <div @click="postContent" class="set-content">Post Content</div>
    </div>
    <div class="font-6-16 title">
      title: <input type="text" v-model="detailData.name">
    </div>
    <div id="editor"></div>
  </div>
</template>
<script>
import axios from "~/plugins/axios";
export default {
  head: {
    link: [
      {
        rel: "stylesheet",
        href: "https://cdn.quilljs.com/1.3.6/quill.snow.css"
      },
      // {
      //   rel: "stylesheet",
      //   href: "https://cdn.quilljs.com/1.3.6/quill.bubble.css"
      // }
    ],
    script: [{ src: "https://cdn.quilljs.com/1.3.6/quill.js" }]
  },
  methods: {
    async postContent() {
      const result = await axios.post(
        "/articles/update_article_content"
      , {
        html: this.editor.root.innerHTML,
        id: this.id,
        delta: JSON.stringify(this.editor.editor.delta),
        name: this.detailData.name
      });
      
      if(result.data.resultcode === 0) {
        history.back()
      }
    }
  },
  async asyncData({ params, $axios }) {
    const result = await axios.get(
      "/articles/get_article_content?id=" + params.id
    );
    const detailData = result.data.data.results;
    return { 
      id: params.id,
      detailData,
    };
  },
  mounted() {
    var toolbarOptions = [
      ["bold", "italic", "underline", "strike", "image"], // toggled buttons
      ["blockquote", "code-block"],

      [{ header: 1 }, { header: 2 }], // custom button values
      [{ list: "ordered" }, { list: "bullet" }],
      [{ script: "sub" }, { script: "super" }], // superscript/subscript
      [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
      [{ direction: "rtl" }], // text direction

      [{ size: ["small", false, "large", "huge"] }], // custom dropdown
      [{ header: [1, 2, 3, 4, 5, 6, false] }],

      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      [{ font: [] }],
      [{ align: [] }],

      ["clean"] // remove formatting button
    ];

    setTimeout(() => {
      this.editor = new Quill("#editor", {
        modules: {
          toolbar: toolbarOptions
        },
        theme: "snow"
      });
      console.log()
      this.editor.root.innerHTML = this.detailData.html;
    }, 200);
  }
};
</script>
<style lang="stylus">
body {
  max-width: 1000px;

  .editor-wrap {
    padding: 2rem;
    box-sizing: border-box;
    .title {
      margin: 2rem
      input {
        border 1px solid rgba(233,233,233,1)
        outline none 
        width 50%
        height 3rem
        line-height 3rem
        border-radius 0.5rem
        padding-left 1.5rem
        margin-left 1rem
      }
    }
    .buttons {
      margin-bottom 2rem
      .set-content {
        height 3rem
        width 8rem
        line-height 3rem
        border-radius 0.5rem
        text-align center
        color white
        background #409eff
      }
    }
  }
}
</style>

