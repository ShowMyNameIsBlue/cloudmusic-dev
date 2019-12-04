<template>
  <el-container id="app" class="c-container">
    <el-header class="c-header-container" v-if="headerStatus">
      <me-navbar title="hello world"></me-navbar>
    </el-header>
    <el-main class="c-view-container">
      <keep-alive> <router-view /></keep-alive>
    </el-main>
    <el-footer class="c-footer-container" v-if="footerStatus"></el-footer>
  </el-container>
</template>

<style></style>

<script>
import MeNavbar from '@comp/navbar'
export default {
  data() {
    return {
      headerStatus: this.$store.getters.headerStatus,
      footerStatus: this.$store.getters.footerStatus
    }
  },
  name: 'app',
  components: {
    MeNavbar
  }
}
</script>
