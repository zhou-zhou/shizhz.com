<template>
  <div id="app">
    <Navbar />
    <IntroBoard />
    <!-- <Body/> -->
    <Footer/>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import IntroBoard from './components/IntroBoard'
// import Body from './components/Body'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Navbar,
    IntroBoard,
    // Body,
    Footer
  }
}
</script>

<style lang="scss">
// @import "~bulma";
body {
  // background-color: #36465d !important;
}
</style>
