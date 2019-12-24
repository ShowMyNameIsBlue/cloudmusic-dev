<template>
  <div class="me">
    <me-header class="c-header-container"></me-header>
    <me-main class="c-content-container"></me-main>
  </div>
</template>

<script>
import MeHeader from './header'
import MeMain from './main'

export default {
  name: 'me',
  components: {
    MeHeader,
    MeMain
  }
}
</script>
<style lang="scss" scoped>
.me {
  width: 100%;
  height: 100%;
}
</style>
