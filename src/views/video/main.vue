<template>
  <div class="main">
    <me-scroll>
      <div class="main-list">
        <div class="main-list-item" v-for="(item, index) in data" :key="index">
          <div class="main-list-item-content">
            <router-link to="/">
              <img class="bg" src="" alt="" />
            </router-link>
            <i class="play iconfont icon-kongxinsanjiao-first"></i>
            <i class="playcount iconfont icon-kongxinsanjiao-first"></i>
            <i class="time iconfont icon-paihangbangfuben"> </i>
            <div class="title"></div>
            <div class="author">
              <img class="avatar" src="" alt="" />
              <i class=" iconfont praise icon-zan"></i>
              <i class="iconfont comment icon-c_message"></i>
              <i class="iconfont more icon-msnui-more"></i>
            </div>
          </div>
        </div>
      </div>
    </me-scroll>
  </div>
</template>

<script>
import MeScroll from '@comp/scroll'
export default {
  name: 'VideoMain',
  data() {
    return {
      data: [1]
    }
  },
  components: {
    MeScroll
  }
}
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100%;
  &-list {
    width: 100%;
    &-item {
      &-content {
        padding: 0 0.5rem;
      }
      &::after {
        display: block;
        content: ' ';
        height: 0.2rem;
        width: 100%;
        background: #eee;
        position: absolute;
      }
    }
  }
}
</style>
