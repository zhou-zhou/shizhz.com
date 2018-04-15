<template>
  <div style="height:90%;">
    <div id="editor"></div>
  </div>
</template>

<script>
export default {
  name: 'Writing',
  mounted () {
    const Quill = require('quill')
    var toolbarOptions = [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ font: [] }],
      [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
      ['bold', 'italic', 'underline', 'strike'], // toggled buttons
      ['blockquote', 'code-block'],

      [{ header: 1 }, { header: 2 }], // custom button values
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
      [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
      [{ direction: 'rtl' }], // text direction

      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      [{ align: [] }],

      ['clean'] // remove formatting button
    ]

    var options = {
      modules: {
        toolbar: toolbarOptions
      },
      placeholder: 'Write your article...',
      readOnly: false,
      theme: 'snow'
    }
    new Quill(this.$el.querySelector("#editor"), options)
  }
}
</script>

<style scoped>
#editor {
  height: 90% !important;
}
</style>
