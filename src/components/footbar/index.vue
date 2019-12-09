<template>
  <div class="footer">
    <router-link to="/" class="footer-item" exact>
      <i class="iconfont icon-wangyiyunyinlezizhi-copy"></i>
      <span>发现</span>
    </router-link>
    <router-link to="/video" class="footer-item">
      <i class="iconfont icon-shipin"></i>
      <span>视频</span>
    </router-link>
    <router-link to="/me" class="footer-item">
      <i class="iconfont icon-yinyue"></i>
      <span>我的</span>
    </router-link>
    <router-link to="/cloudset" class="footer-item">
      <i class="iconfont icon-renqun"></i>
      <span>云村</span>
    </router-link>
    <router-link to="/account" class="footer-item">
      <i class="iconfont icon-ren1"></i>
      <span>账号</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'MeFooter'
}
</script>

<style lang="scss" scoped>
@import '~@assets/scss/mixins';
.footer {
  display: flex;
  width: 100%;
  height: $tabbar-height;
  background-color: rgba($color: #eee, $alpha: 0.8);

  &-item {
    flex: 1;
    @include flex-center(column);
    .iconfont {
      margin-bottom: 0.1rem;
      font-size: 0.45rem;
      display: block;
      width: 0.8rem;
      height: 0.8rem;
      text-align: center;
      line-height: 0.8rem;
    }
  }
}
.router-link-active {
  & .iconfont {
    background: $theme;
    color: #fff;
    border-radius: 50%;
    font-size: 0.4rem;
    margin-bottom: 0.1rem;
  }
}
</style>
