<template>
  <div>
    <IntroBoard />
    <div class="ui section divider" style="margin: 1em;"></div>
    <Articles />
    <div class="ui section divider"></div>
  </div>
</template>

<script>
import IntroBoard from '@/components/IntroBoard'
import Articles from '@/components/Articles'

export default {
  name: 'Home',
  components: {
    IntroBoard,
    Articles
  }
}
</script>
