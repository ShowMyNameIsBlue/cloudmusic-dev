<template>
  <div class="video">
    <div class="video-header">
      <span>云村精选</span>
      <span @click="refresh" class="iconfont icon-shuaxin">获取新内容</span>
    </div>
    <div class="video-item" v-for="(item, index) in data" :key="index">
      <div class="video-wrapper">
        <router-link class="video-main" to="/" tag="div">
          <img class="img" :src="item.cover" alt="" />
          <i class="play iconfont icon-kongxinsanjiao-first"></i>
          <i class="count iconfont  icon-kongxinsanjiao-first">{{
            playcount(item.playCount)
          }}</i>
          <i class="time iconfont icon-paihangbangfuben">
            {{ duration(item.duration) }}
          </i>
          <span class="title">{{ item.artistName }} {{ item.name }}</span>
        </router-link>
        <router-link class="video-author" to="/" tag="div">
          <span></span>
        </router-link>
        <div class="video-footer">
          <i
            class="zan iconfont icon-zan"
            @click="zan(index)"
            :class="{ zanActive: zans_idx.includes(index) }"
          >
            {{ getRandom(item.playCount) }}</i
          >
          <router-link class="msg iconfont icon-c_message" to="/"></router-link>
          <i class="more iconfont icon-msnui-more" @click="moreInfo(index)"></i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { axiosGet } from '@assets/js/query'
import { ROUTER } from './config'
import { playcount, duration } from '@assets/js/util'
export default {
  name: 'HomeVideo',
  data() {
    return {
      zans: false,
      zans_idx: [],
      newOffset: 0,
      data: []
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      this.pagination()
    },
    refresh() {
      this.pagination(Math.floor(Math.random() * 15 + 1))
    },
    moreInfo(index) {
      this.$emit('moreInfo', index)
    },
    async getMore() {
      const res = await axiosGet(ROUTER.video, {
        limit: 10,
        offset: this.newOffset
      })
      const { data } = res
      this.$emit('loaded', data)
      this.data.push(...data)
    },
    async pagination(offset = 0, limit = 10) {
      const res = await axiosGet(ROUTER.video, {
        limit,
        offset
      })
      this.newOffset = offset + limit
      const { data } = res
      this.$emit('loaded', data)
      this.data = data
    },
    zan(idx) {
      if (this.zans_idx.includes(idx)) {
        this.zans_idx = this.zans_idx.filter((v, i) => i !== idx)
      } else this.zans_idx.push(idx)
    },
    playcount,
    duration,
    getRandom(num) {
      return this.playcount(parseInt(num / 8))
    },
    deleteThis(index) {
      this.data = this.data.filter((v, i) => i !== index)
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~@assets/scss/mixins';
.video {
  font-size: 0.4rem;
  padding-top: 0.1rem;
  .iconfont {
    font-size: 0.35rem;
  }
  &-header {
    padding: 0.5rem 0.5rem;
    color: #000;
    background: #fff;
    border-bottom: 1px solid #eee;
    .iconfont {
      position: absolute;
      right: 0.5rem;
      letter-spacing: 0.025rem;
      font-size: 0.4rem;
    }
  }
  &-item {
    background: #eee;
    height: 7.5rem;
  }

  &-wrapper {
    padding: 0.5rem;
    background: #fff;
    height: 7.4rem;
    position: relative;
  }

  &-main {
    border-radius: 0.4rem;
    overflow: hidden;
    width: 100%;
    height: 6rem;
    position: relative;
    background: rgba($color: #eee, $alpha: 0.5);
    & .img {
      display: block;
      width: 100%;
      height: 4.875rem;
    }
    & .play {
      position: absolute;
      top: 50%;
      left: 50%;
      font-size: 0.75rem;
      margin-top: -0.8rem;
      margin-left: -0.375rem;
      color: #eee;
      display: block;
      width: 1rem;
      height: 1rem;
      background: rgba($color: #eee, $alpha: 0.7);
      text-indent: 0.2rem;
      line-height: 1rem;
      border-radius: 50%;
    }
    & .count {
      position: absolute;
      left: 0.1rem;
      margin-top: -0.5rem;
      color: #ddd;
    }
    & .time {
      position: absolute;
      right: 0.1rem;
      margin-top: -0.5rem;
      color: #ddd;
    }
    .title {
      position: absolute;
      padding: 0.3rem;
      padding-top: 0.4rem;
      color: #000;
      display: inline-block;
      width: 8rem;
      @include ellipsis();
    }
  }
  &-author {
    display: inline-block;
    border-radius: 50%;
    width: 0.75rem;
    height: 0.75rem;
    position: absolute;
    margin-top: -1rem;
    right: 0.8rem;
  }
  &-footer {
    padding-top: 0.2rem;
    line-height: 0.4rem;
  }
  .zan {
    position: absolute;
    left: 0.6rem;
  }
  .zanActive {
    color: $theme;
  }
  .msg {
    position: absolute;
    left: 2.4rem;
  }
  .more {
    position: absolute;
    right: 0.6rem;
  }
}
</style>
