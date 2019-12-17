<template>
  <me-navbar class="c-header-container">
    <i class="iconfont icon-shipin2" slot="left"></i>
    <div slot="center">
      搜索
    </div>
  </me-navbar>
</template>

<script>
import MeNavbar from '@comp/navbar'
export default {
  name: 'VideoHeader',
  components: {
    MeNavbar
  }
}
</script>
