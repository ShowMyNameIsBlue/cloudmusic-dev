<template>
  <me-navbar class="header c-header-container">
    <i class="iconfont icon-shipin2" slot="left"></i>
    <span class="title" slot="center">我的音乐</span>
    <me-icon slot="right"></me-icon>
  </me-navbar>
</template>

<script>
import MeNavbar from '@comp/navbar'
import MeIcon from '@comp/rightIcon'
export default {
  name: 'MeHeader',
  components: {
    MeNavbar,
    MeIcon
  }
}
</script>

<style lang="scss" scoped>
.iconfont {
  font-size: 0.45rem;
}
.title {
  font-size: 0.45rem;
  color: #000;
  font-weight: bold;
  display: block;
  width: 100%;
  text-align: center;
}
</style>
