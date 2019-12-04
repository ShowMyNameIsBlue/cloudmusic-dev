<template>
  <div class="sigin">
    <div class="logo iconfont icon-wangyiyunyinle"></div>
    <el-button class="phone btn">手机登录</el-button
    ><el-button class="email btn">邮箱登录</el-button>
    <el-checkbox v-model="checked">
      <span
        >同意<a href="#" class="rule"
          >《服务条款》《隐私政策》 《儿童隐私政策》</a
        ></span
      >
    </el-checkbox>
  </div>
</template>

<script>
export default {
  name: 'MeSigin',
  data() {
    return {
      checked: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@assets/scss/mixins';
.sigin {
  width: 100%;
  height: 100%;
  @include flex-center(column);
  background: $theme;
}
.btn {
  margin: auto;
}
.rule {
  color: #fff;
  font-size: $font-size-base;
}
</style>
