<template>
  <div class="main">
    <me-loading v-if="data.length === 0"></me-loading>
    <me-warn ref="warn"></me-warn>
    <me-scroll :pullUp="true" @pullUpBegin="getNewData" ref="scroll">
      <div class="main-list">
        <div class="main-list-item" v-for="(item, index) in data" :key="index">
          <div class="main-list-item-content">
            <router-link :to="item.data.urlInfo.url">
              <img class="bg" :src="item.data.coverUrl" alt="" />
            </router-link>
            <i class="play iconfont icon-kongxinsanjiao-first"></i>
            <i class="playcount iconfont icon-kongxinsanjiao-first">{{
              playcount(item.data.playTime)
            }}</i>
            <i class="duration iconfont icon-paihangbangfuben">{{
              duration(item.data.durationms)
            }}</i>
            <div class="title">{{ item.data.title }}</div>
            <div class="author">
              <i
                ><img
                  class="avatar"
                  :src="item.data.creator.avatarUrl"
                  alt=""
                /><span>{{ item.data.creator.nickname }}</span></i
              >
              <i
                :class="{ zanActive: zans_idx.includes(index) }"
                class="iconfont icon-zan praise"
                @click="zan(index)"
                ><span>{{ newplaycount(item.data.praisedCount) }}</span></i
              >
              <i class="iconfont comment icon-c_message"
                ><span>{{ newplaycount(item.data.commentCount) }}</span></i
              >
              <i
                class="iconfont more icon-msnui-more"
                @click="moreInfo(index)"
              ></i>
            </div>
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
import { playcount, duration } from '@assets/js/util'
import MeLoading from '@comp/loading'
import MeWarn from '@comp/warn'
export default {
  name: 'VideoMain',
  data() {
    return {
      data: [],
      zans_idx: []
    }
  },
  created() {
    this.init()
  },
  methods: {
    async init() {
      const data = await this.getData()
      this.data = data
      // const datas = await axiosGet('/api/comment/hotwall/list')
    },
    async getData() {
      const { id } = this.$route.params
      const res = await axiosGet(ROUTER.vdo_detail, { id })
      let { datas } = res
      if (!res.hasmore) {
        this.$refs.warn.show('此分区已无最新资源')
      }

      datas = datas.filter(v => v.data.alg !== null)
      return datas
    },
    async getNewData() {
      const data = await this.getData()
      const t = this
      setTimeout(() => {
        t.data.push(...data)
        t.$refs.scroll.pullUpEnd()
      }, 2000)
    },
    moreInfo(index) {
      this.$parent.moreInfo(index)
    },
    deleteThis(idx) {
      this.data = this.data.filter((v, i) => i !== idx)
    },
    newplaycount(num) {
      if (num >= 999) {
        return '999+'
      }
      return num
    },
    zan(idx) {
      if (this.zans_idx.includes(idx)) {
        this.zans_idx = this.zans_idx.filter((v, i) => i !== idx)
      } else this.zans_idx.push(idx)
    },
    playcount,
    duration
  },
  components: {
    MeScroll,
    MeLoading,
    MeWarn
  },
  watch: {
    async $route(to) {
      this.$refs.warn.hide()
      if (to.fullPath.includes('/video/type') && to.params.id) {
        this.data = ''
        const res = await this.getData()
        this.data = res
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@assets/scss/mixins';
.main {
  width: 100%;
  height: 100%;
  &-list {
    width: 100%;
    // height: 100%;
    &-item {
      width: 100%;
      &-content {
        width: 100%;
        position: relative;
        padding: 0.5rem;
        .bg {
          display: block;
          width: 100%;
          height: 4.625rem;
          border-radius: 0.25rem;
        }
        .play {
          position: absolute;
          font-size: 0.8rem;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -200%);
          color: #fff;
          font-weight: bold;
        }
        .playcount {
          position: absolute;
          top: 4.6rem;
          left: 0.7rem;
        }
        .duration {
          position: absolute;
          top: 4.6rem;
          right: 0.7rem;
        }
        .title {
          color: #111;
          border-bottom: #bbb 1px solid;
          @include multiline-ellipsis();
          font-size: 0.4rem;
          padding: 0.2rem 0;
          line-height: 0.6rem;
        }
        .iconfont {
          color: #ddd;
        }
        .author {
          margin-top: 0.3rem;
          font-size: 0.4rem;
          @include flex-between();
          .avatar {
            display: inline-block;
            height: 0.9rem;
            width: 0.9rem;
            border-radius: 50%;
            margin-right: 0.2rem;
            & + span {
              @include ellipsis();
              display: inline-block;
              line-height: 0.9rem;
              height: 0.9rem;
              width: 2.5rem;
              font-size: 0.3rem;
            }
          }

          .iconfont {
            position: relative;
            font-size: 0.5rem;
            color: #999;
            span {
              position: absolute;
              font-size: 0.3rem;
              left: 14px;
              background: #fff;
              top: -0.125rem;
            }
          }
        }
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
.zanActive {
  &.iconfont {
    color: $theme !important;
  }
}
</style>
