<template>
  <div id="app" class="c-container">
    <div class="c-view-container" :class="{ gap_bottom: !footerStatus }">
      <keep-alive> <router-view /></keep-alive>
    </div>
    <div class="c-footer-container" v-show="footerStatus"></div>
  </div>
</template>

<style lang="scss" scoped>
@import '~@assets/scss/mixins';
.gap_bottom,
.gap_top {
  padding: 0;
}
</style>

<script>
export default {
  data() {
    return {
      footerStatus: this.$store.getters.footerStatus
    }
  },
  name: 'app',
  components: {}
}
</script>
