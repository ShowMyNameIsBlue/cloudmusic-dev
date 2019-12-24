<template>
  <div class="main">
    <me-scroll>
      <div class="main-list">
        <div class="main-list-item iconfont icon-yinyue">
          <div class="right">
            <span class="title">本地音乐</span>
            <span class="data"></span><i class="el-icon-arrow-right"></i>
          </div>
        </div>
        <div class="main-list-item iconfont icon-zuijinbofang">
          <div class="right">
            <span class="title">最近播放</span>
            <span class="data"></span><i class="el-icon-arrow-right"></i>
          </div>
        </div>
        <div class="main-list-item iconfont icon-diantai">
          <div class="right">
            <span class="title">我的电台</span>
            <span class="data"></span><i class="el-icon-arrow-right"></i>
          </div>
        </div>

        <div class="main-list-item iconfont icon-wodeshoucang">
          <div class="right">
            <span class="title ">我的收藏</span>
            <span class="data"></span><i class="el-icon-arrow-right"></i>
          </div>
        </div>
      </div>
      <div class="main-playlist">
        <div class="main-playlist-item createlist" @click="showList(1)">
          <span class="title el-icon-arrow-right" ref="list1"
            >我创建的歌单<span class="num"></span
          ></span>
          <i class="iconfont icon-jia"></i>
          <i class="iconfont icon-msnui-more"></i>
        </div>
        <div class="song" v-show="list1">
          <div
            class="song-item"
            v-for="(item, index) in createlist"
            :key="index"
          >
            <div class="song-item-main">
              <img :src="item.coverImgUrl" alt="" />
              <div class="main-content">
                <div class="title">{{ item.name }}</div>
                <div class="desc iconfont icon-duoxuan">
                  <span>{{ item.trackCount }} 首</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="main-playlist-item lovelist " @click="showList(2)">
          <span class="title el-icon-arrow-right" ref="list2"
            >我收藏的歌单<span class="num"></span
          ></span>
          <i class="iconfont icon-msnui-more"></i>
        </div>
        <div class="song " v-show="list2">
          <div class="song-item" v-for="(item, index) in lovelist" :key="index">
            <div class="song-item-main">
              <img :src="item.coverImgUrl" alt="" />
              <div class="main-content">
                <div class="title">{{ item.name }}</div>
                <div class="desc iconfont icon-duoxuan">
                  <span>{{ item.trackCount }} 首</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </me-scroll>
  </div>
</template>

<script>
import MeScroll from '@comp/scroll'
import { ROUTER } from './config'
import { axiosGet } from '@assets/js/query'
export default {
  name: 'MeMain',
  data() {
    return {
      list1: false,
      list2: false,
      createlist: [],
      lovelist: []
    }
  },
  created() {
    this.init()
  },
  methods: {
    async init() {
      const data = await this.getData()
      const { createlist, lovelist } = data
      this.createlist = createlist
      this.lovelist = lovelist
      console.log(data)
    },
    async getData() {
      const res = await axiosGet(ROUTER.playList)
      const { playlist } = res
      const data = {
        createlist: [],
        lovelist: []
      }
      playlist.forEach(e => {
        if (e.userId === 32953014) {
          data.createlist.push(e)
        } else data.lovelist.push(e)
      })
      return data
    },
    showList(id) {
      this[`list${id}`] = !this[`list${id}`]
      const el = this.$refs[`list${id}`].classList
      if (el.contains('el-icon-arrow-right')) {
        el.remove('el-icon-arrow-right')
        el.add('el-icon-arrow-down')
      } else {
        el.remove('el-icon-arrow-down')
        el.add('el-icon-arrow-right')
      }
    }
  },
  components: {
    MeScroll
  }
}
</script>
<style lang="scss" scoped>
@import '~@assets/scss/mixins';
.main {
  width: 100%;
  height: 100%;
  padding-top: 1.5rem;
  &-list {
    // padding: 0.4rem;
    position: relative;
    width: 100%;
    &::after {
      position: absolute;
      content: ' ';
      background: #f8f8f8;
      height: 0.25rem;
      width: 100%;
    }
    &-item {
      padding-left: 0.4rem;
      font-size: 0.6rem;
      @include flex-between();
      height: 1.35rem;
      // color: #000;
      font-weight: 600;
      .right {
        padding-right: 0.4rem;
        width: 85%;
        font-size: 0.45rem;
        letter-spacing: 1px;
        @include flex-between();
        height: 100%;
        border-bottom: 1px solid #e6e6e6;
        .data {
          font-size: 0.35rem;
          font-weight: normal;
          transform: translate(300%, 10%);
          color: #999;
        }
      }
      &:first-child {
        border-top: 1px solid #e6e6e6;
      }
      &:last-child {
        .right {
          border: none;
        }
      }
    }
  }
  &-playlist {
    margin-top: 0.3rem;
    padding: 0.4rem;
    align-items: flex-start;
    &-item {
      height: 1rem;
      @include flex-between();
      font-weight: bold;
      font-size: 0.45rem;
      .title {
        font-weight: bold;
        font-size: 0.45rem;
        color: #000;
      }
      .icon-jia {
        transform: translate(400%, 0);
      }
      .num {
        display: inline-block;
        padding-left: 0.25rem;
        font-size: 0.35rem;
        font-weight: normal;
        color: #aaa;
      }
    }
  }
  .song {
    width: 100%;
    // padding: 0.2rem 0;
    &-item {
      padding-top: 0.2rem;
      @include flex-between();
      &-main {
        @include flex-center();
        img {
          display: block;
          height: 1.275rem;
          width: 1.275rem;
          border-radius: 0.125rem;
        }
        .title {
          text-indent: 0.15rem;
          font-size: 0.4rem;
          letter-spacing: 1px;
          color: #000;
          line-height: 0.5rem;
        }
        .desc {
          text-indent: 0.15rem;
          line-height: 0.5rem;
          font-size: 0.3rem;
          color: #72b3e2;
          span {
            display: inline-block;
            text-indent: 0.125rem;
            color: #aaa;
          }
        }
      }
    }
  }
}
</style>
