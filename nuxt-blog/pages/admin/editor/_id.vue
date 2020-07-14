<template>
  <div class="editor-wrap">
    <div class="buttons">
      <div @click="confirmUpdate" class="set-content">Post Content</div>
    </div>
    <div class="font-6-16 title">
      title: <input type="text" v-model="detailData.title">
    </div>
    <div id="editor"></div>
  </div>
</template>
<script>
import axios from "~/plugins/axios";
export default {
  async asyncData({ params, $axios }) {
    console.log('==================')
    console.log(params.id)

    if(!Number(params.id)) {
      return {
        detailData: {
          html: '',
          title: ''
        }
      }
    }

    const result = await axios.get(
      "/index/articles/get_article_content?id=" + params.id
    );
    const detailData = result.data.data.results;

    return {
      id: params.id,
      detailData,
    };
  },

  mounted() {
    this.initEditor()
  },

  methods: {
    initEditor() {
      const toolbarOptions = [
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
        ["clean"], // remove formatting button
      ];

      setTimeout(() => {
        this.editor = new Quill("#editor", {
          modules: {
            toolbar: toolbarOptions,
          },
          theme: "snow"
        });
        this.editor.root.innerHTML = this.detailData.html;
        console.log(this.detailData.html)
      }, 200);
    },

    imageHandler(res) {
      console.log(res)
    },

    confirmUpdate() {
      this.id ? this.postContent() : this.addNewPost()
    },

    async postContent() {
      const result = await this.$axios.post(
        "/proxy/admin/articles/update_article_content"
      , {
        html: this.editor.root.innerHTML,
        id: this.id,
        title: this.detailData.title
      });

      if(result.data.resultcode === 0) {
        history.back()
      }
    },

    async addNewPost() {
      console.log({
        html: this.editor.root.innerHTML,
        title: this.detailData.title,
        cateId: 1
      })

      const result = await this.$axios.post(
        "/proxy/admin/articles/add_article_content"
        , {
          html: this.editor.root.innerHTML,
          title: this.detailData.title,
          cateId: 1
        });


      if(result.data.resultcode === 0) {
      }
    },
  },

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

