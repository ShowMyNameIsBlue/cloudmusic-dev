<template>
  <div id="app" class="c-container">
    <div class="c-view-container">
      <keep-alive exclude="account,playlist,song,me">
        <router-view
      /></keep-alive>
    </div>
    <div class="c-footer-container">
      <me-footer></me-footer>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '~@assets/scss/mixins';
</style>

<script>
import MeFooter from '@comp/footbar'
export default {
  name: 'app',
  components: {
    MeFooter
  }
}
</script>
