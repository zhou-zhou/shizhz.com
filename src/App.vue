<template>
  <div id="app">
    <Navbar />
    <IntroBoard />
    <hr>
    <Body/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import IntroBoard from './components/IntroBoard'
import Body from './components/Body'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Navbar,
    IntroBoard,
    Body,
    Footer
  }
}
</script>

<style lang="scss">
// @import "~bulma/sass/utilities/_all";
// @import "~bulma/sass/components/navbar.sass";
@import "~bulma";
body {
  background-color: #f3f8f1 !important;
}
</style>
