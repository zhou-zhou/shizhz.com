<template>
  <div id="app">
    <Navbar />
    <IntroBoard />
    <div class="ui section divider"></div>
    <Articles />
    <div class="ui section divider"></div>
    <Footer/>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import IntroBoard from './components/IntroBoard'
import Articles from './components/Articles'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Navbar,
    IntroBoard,
    Articles,
    Footer
  }
}
</script>
