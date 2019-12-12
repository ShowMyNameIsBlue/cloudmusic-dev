<template>
  <div class="home">
    <home-header class="c-header-container"></home-header>
    <div class="c-content-container">
      <me-scroll
        ref="scroll"
        :data="data"
        :pullUp="true"
        @pullUpBegin="loadingMore"
      >
        <div>
          <home-banner> </home-banner>
          <home-tarbar></home-tarbar>
          <home-recommend></home-recommend>
          <home-new></home-new>
          <home-video @loaded="getVideo" ref="video"></home-video>
        </div>
      </me-scroll>
    </div>
  </div>
</template>

<script>
// import BScroll from 'better-scroll'
import HomeHeader from './header'
import HomeBanner from './banner'
import MeScroll from '@comp/scroll'
import HomeTarbar from './tarbar'
import HomeRecommend from './recommend'
import HomeNew from './new'
import HomeVideo from './video'

export default {
  name: 'home',
  data() {
    return {
      data: []
    }
  },
  components: {
    HomeHeader,
    MeScroll,
    HomeBanner,
    HomeTarbar,
    HomeRecommend,
    HomeNew,
    HomeVideo
  },
  methods: {
    getVideo(videos) {
      this.data = videos
    },
    loadingMore() {
      const t = this
      setTimeout(async () => {
        await t.$refs.video.getMore()
        t.$refs.scroll.pullUpEnd()
      }, 2000)
    }
  }
}
</script>
<style lang="scss" scoped>
.home {
  font-size: 0.35rem;
  height: 100%;
}
.test {
  height: 600px;
  background: red;
}
</style>
