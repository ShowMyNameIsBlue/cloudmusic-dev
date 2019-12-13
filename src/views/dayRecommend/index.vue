<template>
  <div class="recommend">
    <recommend-header class="c-header-container"></recommend-header>
    <div class="c-content-container">
      <me-scroll ref="scroll" :probeType="2" class="scroll">
        <img class="recommend-pic" src="" alt="" />
        <div class="recommend-list"></div>
      </me-scroll>
    </div>
  </div>
</template>

<script>
import MeScroll from '@comp/scroll'
import RecommendHeader from './header'
export default {
  name: 'dayRecommend',
  components: {
    MeScroll,
    RecommendHeader
  },
  mounted() {
    const scroll = this.$refs.scroll.getScroll()
    scroll.refresh()
    // scroll.on('scroll', x => {
    //   console.log(x)
    // })
  }
}
</script>

<style lang="scss" scoped>
.recommend {
  width: 100%;
  height: 100%;
  &-pic {
    display: block;
    height: 4.75rem;
    width: 100%;
    background: red;
  }
  &-list {
    height: 16rem;
    width: 100%;
    background: black;
    border-radius: 0.5rem 0.5rem 0 0;
    margin-top: -0.5rem;
  }
  // &-pic {
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  // }
}
.c-content-container {
  padding: 0;
}
</style>
