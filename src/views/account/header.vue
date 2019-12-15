<template>
  <me-navbar class="header">
    <i slot="left" class="iconfont icon-saoyisao"></i>
  </me-navbar>
</template>

<script>
import MeNavbar from '@comp/navbar'
export default {
  name: 'AccountHeader',
  components: {
    MeNavbar
  }
}
</script>

<style lang="scss" scoped>
.iconfont {
  font-size: 0.55rem;
}
</style>
