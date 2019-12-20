<template>
  <div class="main">
    <me-scroll class="srcoll" ref="scroll">
      <transition name="search">
        <div class="search">
          <i class="iconfont icon-zoom"
            ><span>有哪些歌的前奏适合当铃声？</span></i
          >
        </div>
      </transition>
      <div class="comments">
        <me-loading v-if="data.length === 0"></me-loading>
        <div class="comments-item" v-for="(item, index) in data" :key="index">
          <img class="pic" :src="item.simpleResourceInfo.songCoverUrl" alt="" />
          <span class="title">{{ item.content }}</span>
          <div class="author">
            <div class="avator">
              <img :src="item.simpleUserInfo.avatar" alt="" />
              <span class="name">{{ item.simpleUserInfo.nickname }}</span>
            </div>
            <i class="praise">{{ playcount(item.likedCount) }}赞</i>
            <i class="more iconfont icon-msnui-more"></i>
          </div>
        </div>
      </div>
    </me-scroll>
  </div>
</template>

<script>
import MeScroll from '@comp/scroll'
import { axiosGet } from '@assets/js/query'
import { ROUTER } from './config'
import MeLoading from '@comp/loading'
import { playcount } from '@assets/js/util'
export default {
  name: 'CsMain',
  data() {
    return {
      data: []
    }
  },
  created() {
    this.init()
  },
  methods: {
    async init() {
      const data = await this.getData()
      this.data = data
    },
    async getData() {
      const res = await axiosGet(ROUTER.comment)
      let { data } = res
      return data
    },
    playcount
  },
  components: {
    MeScroll,
    MeLoading
  }
}
</script>
<style lang="scss" scoped>
@import '~@assets/scss/mixins';
.main {
  margin-top: 1.25rem;
  height: 100%;
  width: 100%;
  background: #f7f7f7;
  .comments {
    width: 100%;
    padding: 0rem 0.4rem 1.4rem;
    @include flex-between();
    flex-wrap: wrap;
    &-item {
      background: #fff;
      height: 8rem;
      width: 4.15rem;
      border-radius: 0.25rem;
      overflow: hidden;
      margin-top: 0.3rem;
      box-shadow: 0px 2px 2px #ccc;
      .pic {
        width: 100%;
        height: 6rem;
      }
      .title {
        display: block;
        height: 1rem;
        padding: 0.25rem;
        font-size: 0.35rem;
        color: #333;
        @include multiline-ellipsis();
        line-height: 0.4rem;
      }
      .author {
        padding: 0.25rem;
        @include flex-between();
        color: #999;
        font-size: 0.3rem;
        height: 1rem;
        img {
          display: inline-block;
          width: 0.4rem;
          height: 0.4rem;
          border-radius: 50%;
        }
        span {
          display: inline-block;
          text-indent: 2px;
          line-height: 0.4rem;
          @include ellipsis();
          width: 1.5rem;
          // font-size: 0.3rem;
          // transform: scale(0.9);
        }
      }
    }
  }
}
.search {
  background: #fff;
  height: 1.2rem;
  width: 100%;
  padding: 0.2rem 0.5rem;
  // margin-top: 1.2rem;
  .icon-zoom {
    display: block;
    border-radius: 0.4rem;
    background: #f7f7f7;
    height: 0.8rem;
    line-height: 0.8rem;
    text-align: center;
    font-size: 0.4rem;
    color: #a0a0a0;
    span {
      display: inline-block;
      text-indent: 0.125rem;
    }
  }
  &-leave-active,
  &-enter-active {
    transition: all 0.3s;
  }
  &-enter,
  &-leave-active {
    transform: translate3d(0, -10%, 0);
    opacity: 0;
  }
}
</style>
