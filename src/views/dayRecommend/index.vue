<template>
  <div class="recommend" ref="recommend" @scroll="scroll">
    <recommend-header class="c-header-container"></recommend-header>
    <span class="recommend-date" v-if="date"
      ><span>{{ day }} </span>/ {{ month }}</span
    >
    <div class="c-content-container">
      <div ref="scroll" class="scroll">
        <div class="playall">
          <i class="iconfont icon-bofang"> 播放全部</i>
          <i class="iconfont icon-gengduo"><span> 多选</span></i>
        </div>
        <div
          class="recommend-list "
          ref="scroll1"
          :class="{ list_active: isScroll }"
        >
          <div
            class="recommend-list-item"
            v-for="(item, index) in data"
            :key="index"
          >
            <router-link to="/" class="main" tag="div" @click="playsong(index)">
              <img :src="item.album.picUrl" alt="" class="img" />
              <i class="iconfont icon-laba " v-if="index === playId"></i>
              <p>
                <span class="title">{{ item.name }}</span>
                <span class="desc">{{
                  `${item.album.artists[0].name}-${item.album.name}`
                }}</span>
              </p>
            </router-link>
            <i class="iconfont icon-msnui-more"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RecommendHeader from './header'
import { ROUTER } from './config'
import { axiosGet } from '@assets/js/query'
export default {
  name: 'dayRecommend',
  data() {
    return {
      first: false,
      isScroll: false,
      day: '',
      month: '',
      date: true,
      data: [],
      playId: ''
    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      this.getSongs()
      this.getDate()
    },
    getDate() {
      this.day = new Date().getDate()
      this.month = new Date().getMonth() + 1
    },
    async getSongs() {
      const res = await axiosGet(ROUTER.recom_songs)
      const { recommend } = res
      this.data = recommend
    },
    playsong(idx) {
      this.playId = idx
    },
    scroll() {
      if (this.$refs.recommend.scrollTop > 120) {
        this.isScroll = true
        this.first = true
      }
      if (this.$refs.recommend.scrollTop > 30) {
        this.date = false
      } else {
        this.date = true
      }

      if (this.first && this.$refs.recommend.scrollTop === 0) {
        this.isScroll = false
        this.first = false
      }
    }
  },
  watch: {
    $route(to) {
      if (to.fullPath === '/dayRecommend') {
        this.$router.go(0)
      }
    }
  },
  components: {
    RecommendHeader
  }
}
</script>

<style lang="scss" scoped>
@import '~@assets/scss/mixins';
.recommend {
  width: 100%;
  height: 100%;
  overflow: scroll;
  padding-top: 2rem;
  background: {
    image: url(./background.jpg);
    repeat: no-repeat;
    size: 100% 5.5rem;
  }
  &-date {
    color: #ddd;
    font-size: 0.5rem;
    position: absolute;
    left: 0.55rem;
    margin-top: 2rem;
    & span:first-child {
      font-size: 0.65rem;
    }
  }
  &-pic {
    display: block;
    height: 4.75rem;
    width: 100%;
    background: red;
  }
  .playall {
    line-height: 0.4rem;
    margin-top: 3rem;
    border-radius: 0.5rem 0.5rem 0 0;
    height: 1rem;
    background: #fff;
    padding: 0.4rem;
    @include flex-between();
    .icon-bofang {
      color: #000;
      font-size: 0.4rem;
    }
    .icon-gengduo {
      font-size: 0.3rem;
    }
    span {
      font-size: 14px;
    }
  }
  &-list {
    height: 100%;
    width: 100%;
    background: #fff;
    overflow: hidden;
    padding: 0 0.4rem;
    padding-bottom: 0;

    &-item {
      @include flex-between();
      width: 100%;
      height: 1.5rem;
      .img {
        width: 1.2rem;
        height: 1.2rem;
        border-radius: 0.05rem;
      }

      .main {
        .icon-laba {
          position: relative;
          top: -0.3rem;
          left: 0.2rem;
          color: $theme;
        }
        p {
          width: 6rem;
          display: inline-block;
          .title {
            display: block;
            margin-top: 0.25rem;
            color: #000;
            font-size: 0.4rem;
            text-indent: 0.4rem;
          }
          .desc {
            width: 100%;
            @include ellipsis();
            color: #999;
            font-size: 0.3rem;
            display: inline-block;
            padding-left: 0.4rem;
            line-height: 0.5rem;
          }
        }
      }
      .iconfont {
        font-size: 0.45rem;
        color: #b3b3b3;
      }
    }
  }
  .list_active {
    overflow: scroll;
  }
}
.c-content-container {
  padding: 0;
}
.scroll {
  width: 100%;
  height: 100%;
}
.scroll-wrapper {
  overflow: hidden;
}
</style>
