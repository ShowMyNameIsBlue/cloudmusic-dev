<template>
  <div class="main">
    <span class="one"></span>
    <span class="two"></span>
    <span class="three"></span>
    <span class="four"></span>
  </div>
</template>

<style lang="scss" scoped>
@import '~@assets/scss/mixins';
.main {
  height: 0.625rem;
  width: 0.625rem;
  @include flex-center();
  align-items: flex-end;
  justify-content: space-around;
  .one {
    height: 0.375rem;
    border: 1px solid #999;
  }
  .two {
    height: 0.625rem;
    border: 1px solid #999;
  }
  .three {
    height: 0.5rem;
    border: 1px solid #999;
  }
  .four {
    height: 0.625rem;
    border: 1px solid #999;
  }
}
</style>

<script>
export default {
  name: 'MeIcon'
}
</script>
