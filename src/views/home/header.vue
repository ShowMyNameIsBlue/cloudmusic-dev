<template>
  <me-navbar class="header">
    <router-link to="/" class="iconfont icon-tinggeshiqu" slot="left" />
    <div slot="center">搜索</div>
    <me-icon class="right" slot="right"></me-icon>
  </me-navbar>
</template>

<script>
import MeNavbar from '@comp/navbar'
import MeIcon from '@comp/rightIcon'
export default {
  name: 'HomeHeader',
  components: {
    MeNavbar,
    MeIcon
  }
}
</script>
<style lang="scss" scoped>
.iconfont {
  font-size: 0.625rem;
}
</style>
