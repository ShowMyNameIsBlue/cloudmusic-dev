<template>
  <div class="sigin">
    <sigin-way></sigin-way>
  </div>
</template>

<script>
import SiginWay from './way'
export default {
  name: 'MeSigin',
  components: {
    SiginWay
  }
}
</script>

<style lang="scss" scoped>
@import '~@assets/scss/mixins';
.sigin {
  width: 100%;
  height: 100%;
  @include switch();
  position: absolute;
}
</style>
