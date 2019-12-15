<template>
  <me-navbar class="header">
    <i slot="left" class="left el-icon-arrow-left" @click="backs"></i>
    <div slot="right">
      <i class="el-icon-question info"></i>
      <me-icon class="right"></me-icon>
    </div>
  </me-navbar>
</template>

<script>
import MeNavbar from '@comp/navbar'
import MeIcon from '@comp/rightIcon'
export default {
  name: 'RecommendHeader',
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
  color: #eee;
}
.left {
  font-size: 0.625rem;
}
.info {
  position: absolute;
  font-size: 0.625rem;
  right: 1.5rem;
}
</style>
