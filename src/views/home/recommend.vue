<template>
  <div class="recommend">
    <div class="recommend-title">
      <span class="left">推荐歌单</span>
      <span class="right">歌单广场</span>
    </div>
    <div class="recommend-content">
      <router-link class="recommend-content-item" to="/">
        <me-loading v-if="data.length === 0" text></me-loading>
        <i class="iconfont"></i>
        <img class="img" src="" alt="" />
        <p class="desc"></p>
      </router-link>
    </div>
  </div>
</template>
<script>
// import { axiosGet } from '@assets/js/query'
// import { ROUTER } from './config'
import MeLoading from '@comp/loading'
export default {
  name: 'HomeRecommend',
  data() {
    return {
      data: []
    }
  },
  components: {
    MeLoading
  }
}
</script>
<style lang="scss" scoped>
@import '~@assets/scss/mixins';
.recommend {
  padding: 0.5rem;
  &-title {
    height: 0.75rem;
    .left {
      font-size: 0.45rem;
      font-weight: bold;
      line-height: 0.75rem;
    }
    .right {
      display: inline-block;
      position: absolute;
      right: 0.5rem;
      font-size: 0.4rem;
      width: 1.875rem;
      height: 0.75rem;
      border-radius: 0.25rem;
      border: 1px solid #ddd;
      text-align: center;
      line-height: 0.625rem;
    }
  }
  &-content {
    @include flex-between();
    flex-wrap: wrap;
    position: relative;
    margin-top: 0.4rem;
    &-item {
      width: 2.75rem;
      height: 3.75rem;
      border: 1px red solid;
      .iconfont {
        position: absolute;
        right: 0.25rem;
        top: 0.125rem;
        color: #fff;
      }
      .img {
        width: 2.75rem;
        height: 2.75rem;
        border-radius: 0.25rem;
      }
      .desc {
        font-size: 0.4rem;
        @include multiline-ellipsis();
        text-align: left;
      }
    }
  }
}
</style>
