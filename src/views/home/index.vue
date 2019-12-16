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
        <home-banner> </home-banner>
        <home-tarbar></home-tarbar>
        <home-recommend></home-recommend>
        <home-new></home-new>
        <home-video
          @loaded="getVideo"
          @moreInfo="moreInfo"
          ref="video"
        ></home-video>
      </me-scroll>

      <me-warn ref="warn"></me-warn>
      <me-more v-if="showMore" @click.native="back">
        <div>
          <div class="title">更多</div>
          <i class="iconfont icon-cha" @click="deleteThis"
            ><span>不感兴趣</span></i
          >
        </div>
      </me-more>
    </div>
  </div>
</template>

<script>
import HomeHeader from './header'
import HomeBanner from './banner'
import MeScroll from '@comp/scroll'
import HomeTarbar from './tarbar'
import HomeRecommend from './recommend'
import HomeNew from './new'
import HomeVideo from './video'
import MeMore from '@comp/more'
import MeWarn from '@comp/warn'

export default {
  name: 'home',
  data() {
    return {
      data: [],
      showMore: false,
      deleIdx: ''
    }
  },
  components: {
    HomeHeader,
    MeScroll,
    HomeBanner,
    HomeTarbar,
    HomeRecommend,
    HomeNew,
    HomeVideo,
    MeMore,
    MeWarn
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
    },
    moreInfo(index) {
      this.deleIdx = index
      this.showMore = true
    },
    back() {
      this.showMore = false
    },
    // showWarn(msg) {
    //   this.$refs.warn.show(msg)
    // },
    deleteThis() {
      this.$refs.video.deleteThis(this.deleIdx)
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~@assets/scss/mixins';
.c-content-container {
  padding-bottom: 0;
}
.home {
  font-size: 0.35rem;
  height: 100%;
  padding-top: $navbar-height;
}
.title {
  display: block;
  color: #999;
  line-height: 1.25rem;
  text-indent: 0.5rem;
  border-bottom: 1px solid #dddd;
}
.iconfont {
  color: #000;
  font-size: 0.4rem;
  line-height: 1.25rem;
  padding-left: 0.5rem;
  & span {
    padding-left: 0.2rem;
  }
}
</style>
