<template>
  <div class="tarbar">
    <router-link to="/dayRecommend" class="tarbar-item">
      <i class="iconfont icon-rili"></i>
      <span>每日推荐</span>
    </router-link>
    <router-link to="/" class="tarbar-item">
      <i class="iconfont icon-gedan"></i>
      <span>歌单</span>
    </router-link>
    <router-link to="/" class="tarbar-item">
      <i class="iconfont icon-paihangbangfuben"></i>
      <span>排行榜</span>
    </router-link>
    <router-link to="/" class="tarbar-item">
      <i class="iconfont icon-diantai"></i>
      <span>电台</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeTarbar'
}
</script>
<style lang="scss" scoped>
@import '~@assets/scss/mixins';
.tarbar {
  border-bottom: 1px solid #ddd;
  margin-top: 0.8rem;
  padding-bottom: 0.5rem;
  @include flex-center();
  justify-content: space-around;
  &-item {
    @include flex-center(column);
    text-align: center;
    & .iconfont {
      font-size: 0.5rem;
      display: block;
      width: 0.975rem;
      height: 0.975rem;
      border-radius: 50%;
      line-height: 0.975rem;
      text-align: center;
      background: $theme;
      color: #fff;
    }
    & span {
      line-height: 0.75rem;
    }
  }
}
</style>
