<template>
  <div class="space">
    <me-scroll :pullUp="true" @pullUpBegin="getNewData" ref="scroll">
      <div class="space-header">
        <i class="iconfont icon-xie">&nbsp;&nbsp;发动态</i>
        <i class="iconfont icon-shipin2">&nbsp;&nbsp;发布视频</i>
      </div>
      <div class="space-main">
        <me-loading v-if="data.length === 0"></me-loading>
        <div class="space-main-item" v-for="(item, index) in data" :key="index">
          <div class="author">
            <img class="avator" :src="item.user.avatarUrl" alt="" />
            <div class="title">
              <span class="name">{{ item.user.nickname }} </span>
              <span class="type">{{
                checkType(item.json) === 1
                  ? '发布视频'
                  : checkType(item.json) === 2
                  ? '分享单曲'
                  : ''
              }}</span>
              <span class="funs">{{ validate(item) }} </span>
            </div>
            <div class="btn iconfont icon-jia" v-if="!item.info.liked">
              关注
            </div>
          </div>
          <div class="content">
            <div class="text">{{ JSON.parse(item.json).msg }}</div>
            <div class="audio">
              <div class="pics" v-for="(e, i) in item.pics" :key="i">
                <img class="pic" :src="e.pcSquareUrl" alt="" />
              </div>
              <div class="singer" v-if="checkType(item.json) === 2">
                <img
                  class="singerPic"
                  :src="JSON.parse(item.json).song.artists[0].picUrl"
                  alt=""
                />
                <span class="name"
                  >歌手 {{ JSON.parse(item.json).song.artists[0].name }}</span
                >
              </div>
            </div>
            <div class="video" v-if="checkType(item.json) === 1">
              <img
                class="img"
                :src="JSON.parse(item.json).video.coverUrl"
                alt=""
              />
              <i class="btn iconfont icon-kongxinsanjiao-first"
                ><span></span
              ></i>
              <i class="play iconfont icon-kongxinsanjiao-first"
                ><span>{{
                  playcount(JSON.parse(item.json).video.playTime)
                }}</span></i
              >
              <i class="time iconfont icon-paihangbangfuben"
                ><span>
                  {{ duration(JSON.parse(item.json).video.duration) }}</span
                ></i
              >
            </div>
            <div class="options">
              <i class="iconfont icon-xunhuan"
                >&nbsp;{{ item.info.shareCount }}</i
              >
              <i class="iconfont icon-c_message"
                >&nbsp;{{ item.info.commentCount }}</i
              >
              <i class="iconfont icon-zan">&nbsp;{{ item.info.likedCount }}</i>
              <i class="iconfont icon-msnui-more">&nbsp;</i>
            </div>
          </div>
        </div>
      </div>
    </me-scroll>
  </div>
</template>

<script>
import MeScroll from '@comp/scroll'
import MeLoading from '@comp/loading'
import { axiosGet } from '@assets/js/query'
import { ROUTER } from './config'
import { playcount, duration } from '@assets/js/util'
export default {
  name: 'CsSpace',
  data() {
    return {
      data: [],
      lasttime: -1
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
      const res = await axiosGet(ROUTER.event, {
        pagesize: 10,
        lasttime: this.lasttime
      })
      this.lasttime = res.lasttime
      return res.event
    },
    async getNewData() {
      const data = await this.getData()
      const t = this
      setTimeout(() => {
        t.data.push(...data)
        t.$refs.scroll.pullUpEnd()
      }, 2000)
    },
    checkType(info) {
      const res = JSON.parse(info)
      if (res.video) {
        return 1 // 视频
      } else if (res.song) {
        return 2 // 单曲
      } else {
        return 0
      }
    },
    validate(json) {
      if (json.rcmdInfo && json.rcmdInfo.userReason) {
        return json.rcmdInfo.userReason
      } else return ''
    },
    playcount,
    duration
  },
  components: {
    MeScroll,
    MeLoading
  }
}
</script>

<style lang="scss" scoped>
@import '~@assets/scss/mixins';
.space {
  margin-top: 1.25rem;
  height: 100%;
  width: 100%;
  padding-bottom: 1.2rem;
  &-header {
    position: relative;
    @include flex-center();
    justify-content: space-around;
    height: 1.025rem;
    width: 100%;
    font-size: 20px;
    &::after {
      position: absolute;
      display: block;
      content: ' ';
      height: 0.25rem;
      width: 100%;
      background: #f8f8f8;
      top: 1rem;
    }
  }
  &-main {
    width: 100%;
    height: 100%;
    margin-top: 0.5rem;
    &-item {
      border-top: 1px solid #f8f8f8;
      // padding: 0;
      padding: 0.4rem;
      .author {
        position: relative;
        @include flex-between();
        .avator {
          display: block;
          border-radius: 50%;
          height: 1.125rem;
          width: 1.125rem;
        }
        .title {
          position: absolute;
          left: 1.375rem;
          // @include flex-center(column);
          align-items: flex-start;
          .name {
            display: inline-block;
            width: 2.5rem;
            @include ellipsis();
            font-size: 0.4rem;
            line-height: 0.5rem;
            color: #6887b2;
          }
          .funs {
            display: block;
            font-size: 0.35rem;
            line-height: 0.5rem;
            color: #c8c8c8;
          }
          .type {
            position: relative;
            top: -0.1rem;
            font-size: 0.4rem;
          }
        }
        .btn {
          display: inline-block;
          color: #fff;
          height: 0.625rem;
          width: 1.5rem;
          border-radius: 0.3rem;
          background: $theme;
          font-size: 0.3rem;
          @include flex-center();
          letter-spacing: 1px;
        }
      }
      .content {
        text-align: left;
        width: 100%;
        overflow: hidden;
        padding: 0.4rem 0rem 0.4rem 1.45rem;
        .text {
          font-size: 0.35rem;
          line-height: 0.5rem;
        }
        .audio {
          .pics {
            margin-top: 0.25rem;
            @include flex-between();
            flex-wrap: wrap;
            .pic {
              display: block;
              border-radius: 0.125rem;
              height: 3.5rem;
              width: 3.5rem;
            }
          }
          .singer {
            width: 100%;
            height: 1.425rem;
            margin-top: 0.25rem;
            background: #f5f5f5;
            padding: 0.25rem;
            .singerPic {
              display: inline-block;
              height: 100%;
              width: 1.125rem;
              border-radius: 0.125rem;
            }
            .name {
              color: #000;
              display: inline-block;
              line-height: 0.925rem;
              text-indent: 0.5rem;
            }
          }
        }
        .video {
          width: 100%;
          height: 4.0625rem;
          position: relative;
          .img {
            width: 100%;
            height: 100%;
            border-radius: 0.5rem;
          }
          .btn {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 0.6rem;
            color: #fff;
            font-weight: bold;
          }
          .play {
            position: absolute;
            bottom: 0.2rem;
            left: 0.2rem;
            color: #ccc;
          }
          .time {
            position: absolute;
            bottom: 0.2rem;
            right: 0.2rem;
            color: #ccc;
          }
        }
        .options {
          margin-top: 0.5rem;
          @include flex-between();
          span {
            display: inline-block;
            text-indent: 0.25rem;
          }
        }
      }
    }
  }
}
</style>
