<template>
  <me-navbar class="header">
    <i slot="left" class="left el-icon-arrow-left" @click="backs"></i>
    <span class="center" slot="center">歌单</span>
    <div slot="right">
      <i class="info iconfont icon-msnui-more"></i>
      <me-icon class="right"></me-icon>
    </div>
  </me-navbar>
</template>

<script>
import MeNavbar from '@comp/navbar'
import MeIcon from '@comp/rightIcon'
export default {
  name: 'PlaylistHeader',
  components: {
    MeNavbar,
    MeIcon
  },
  methods: {
    backs() {
      this.$router.back()
    }
  }
}
</script>
<style lang="scss" scoped>
.header {
  color: #fff;
}
.left {
  font-size: 0.625rem;
}
.center {
  display: inline-block;
  width: 100%;
  text-align: center;
  font-weight: bold;
  font-size: 0.45rem;
  line-height: 1rem;
}

.info {
  position: absolute;
  font-size: 0.625rem;
  right: 1.5rem;
}
</style>
