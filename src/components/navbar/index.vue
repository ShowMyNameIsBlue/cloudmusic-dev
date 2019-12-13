<template>
  <div class="c-navbar">
    <div class="c-navbar-left" v-if="$slots.left">
      <slot name="left" />
    </div>
    <div class="c-navbar-center" v-if="$slots.center">
      <slot name="center" />
    </div>
    <div class="c-navbar-right" v-if="$slots.right">
      <slot name="right" />
    </div>
    <h1 class="c-navbar-title" v-if="title">
      <span class="mine-navbar-text" v-text="title"></span>
    </h1>
  </div>
</template>

<style lang="scss" scoped>
@import '~@assets/scss/mixins';
.c-navbar {
  @include flex-between();
  height: $navbar-height;
  width: 100%;
  position: absolute;
  &-left {
    margin-left: 0.25rem;

    ~ .c-navbar-right {
      position: static;
    }
  }
  &-center {
    flex: 1;
    margin: 0 0.25rem;
    ~ .c-navbar-right {
      position: static;
    }
  }
  &-right {
    position: absolute;
    right: 0;
    @include flex-center();
    height: 100%;
    margin-right: 0.25rem;
  }

  &-title {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 20%;
    right: 20%;
    @include flex-center();
    text-align: center;
  }
  &-text {
    width: 100%;
    font-size: 0.45rem;
    text-align: center;
    line-height: 1.5;
    @include ellipsis();
  }
}
</style>
<script>
export default {
  name: 'MeNavbar',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>
