<template>
  <transition name="more">
    <div class="more">
      <div class="more-wrapper">
        <slot />
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'MeMore'
}
</script>

<style lang="scss" scoped>
@import '~@assets/scss/mixins';
.more {
  position: fixed;
  height: 16.675rem;
  width: 100%;
  left: 0;
  top: 0;
  z-index: $search-z-index + 100;
  background: rgba($color: #000, $alpha: 0.1);
  &-wrapper {
    position: absolute;
    height: 2.5rem;
    width: 100%;
    border-radius: 0.5rem 0.5rem 0 0;
    left: 0;
    bottom: 0;
    background: #fff;
  }
}
</style>
