<template>
  <div id="app" class="c-container">
    <div class="c-view-container">
      <keep-alive> <router-view /></keep-alive>
    </div>
    <div class="c-footer-container"></div>
  </div>
</template>

<style lang="scss" scoped>
@import '~@assets/scss/mixins';
</style>

<script>
export default {
  name: 'app'
}
</script>
