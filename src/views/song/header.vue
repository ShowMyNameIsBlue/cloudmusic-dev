<template>
  <me-navbar class="header">
    <i slot="left" class="left el-icon-arrow-left" @click="backs"></i>
    <div slot="center" class="center">
      <div class="title">{{ title }}</div>
      <div class="name">{{ name }} &gt;</div>
    </div>
    <i slot="right" class="iconfont icon-fenxiang"></i>
  </me-navbar>
</template>

<script>
import MeNavbar from '@comp/navbar'
export default {
  name: 'SongHeader',
  components: {
    MeNavbar
  },
  data() {
    return {
      title: '',
      name: ''
    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      const { title, name } = this.$route.query
      // console.log(this.$route)
      this.title = title
      this.name = name
    },
    backs() {
      this.$router.back()
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~@assets/scss/mixins';
.header {
  color: #fff;
}
.left {
  font-size: 0.625rem;
}
.center {
  text-align: center;
  @include flex-center(column);
}
.title {
  font-size: 0.4rem;
  line-height: 0.6rem;
}
.name {
  font-size: 0.3rem;
}
</style>
