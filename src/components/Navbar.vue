<template>
  <div class="ui primary menu fixed-top">
  <a class="item" href="http://shizhz.com">
    <img src="@/assets/logo.png" alt="Logo">
  </a>
  <a class="item" @click="toggleActive(1)" :class="{active : activeItem == 1}">
    Blogs
  </a>
  <a class="item" @click="toggleActive(2)" :class="{active : activeItem == 2}">
    Tips
  </a>
  <div class="right menu">
    <!-- <div class="item"> -->
      <!-- <div class="ui icon input">
        <input name="searchBox" type="text" placeholder="Search...">
        <i class="search link icon"></i>
      </div> -->
      <!-- <SearchBox/> -->
    <!-- </div> -->
    <div class="item">
    <button class="ui positive button">
      <i class="edit icon"></i>
      New
    </button>
    </div>
  </div>
</div>
</template>

<script>
import SearchBox from './SearchBox'
export default {
  name: 'Navbar',
  components: {
    SearchBox
  },
  data () {
    return {
      activeItem: ''
    }
  },
  methods: {
    toggleActive: function (activeItem) {
      this.activeItem = activeItem
    }
  }
}
</script>

<style>
  .fixed-top {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 52px;
    opacity: 0.8;
  }
</style>
