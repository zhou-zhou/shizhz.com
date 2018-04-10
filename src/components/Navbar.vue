<template>
  <div class="ui primary menu fixed-top">
  <a class="item" href="/">
    Home
  </a>
  <a class="item" href="#/blogs" @click="toggleActive(1)" :class="{active : activeItem == 1}">
    <strong>Blogs</strong>
  </a>
  <a class="item" href="#/tips" @click="toggleActive(2)" :class="{active : activeItem == 2}">
    <strong>Tips</strong>
  </a>
  <div class="right menu">
    <div class="item">
      <div class="ui icon input">
        <input name="searchBox" type="text" placeholder="Search...">
        <i class="search link icon"></i>
      </div>
   </div>
    <div class="item">
    <button class="ui positive button" @click="write">
      <i class="edit icon"></i>
      New
    </button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      activeItem: ''
    }
  },
  methods: {
    toggleActive: function (activeItem) {
      this.activeItem = activeItem
    },
    write: function () {
      this.activeItem = ''
      this.$router.push('/write')
    }
  }
}
</script>

<style scoped>
.fixed-top {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 52px;
  opacity: 0.8;
  z-index: 100;
  background-color: rgba(23, 32, 42) !important;
  border-radius: 0 !important;
}
.menu a {
  color: rgba(255, 255, 255, 0.55) !important;
  font-size: 18px !important;
  background-color: transparent !important;
}
.menu a:hover {
  color: rgba(255, 255, 255) !important;
}
a.active {
  color: rgba(255, 255, 255) !important;
  /* color: #f8991d !important;   */
}

input {
  background-color: rgba(255, 255, 255, 0.175) !important;
  outline: none !important;
  -webkit-transition: width 500ms !important;
  -moz-transition: width 500ms !important;
  -o-transition: width 500ms !important;
  transition: width 500ms !important;
  width: 250px !important;
}

input:focus {
  background-color: rgba(255, 255, 255, 0.75) !important;
  border: 0px !important;
  outline: none !important;
  width: 400px !important;
}
</style>
