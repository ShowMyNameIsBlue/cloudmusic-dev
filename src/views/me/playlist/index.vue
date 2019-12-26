<template>
  <div class="playlist">
    <playlist-header class="c-header-container"></playlist-header>
    <me-playlist
      :data="data"
      class="c-content-container"
      @scrollin="changeStatusIn"
      @scrollout="changeStatusOut"
    >
      <div slot="top" class="top">
        <me-loading v-if="data.length === 0"></me-loading>
        <div
          class="top-blur"
          :style="{ backgroundImage: `url(${playlist.coverImgUrl})` }"
        ></div>
        <div class="top-content">
          <img
            class="top-content-img"
            :src="playlist && playlist.coverImgUrl"
            alt=""
          />
          <div class="top-content-right">
            <div class="title">{{ playlist && playlist.name }}</div>
            <div class="creator">
              <img
                class="avator"
                :src="playlist && playlist.creator.avatarUrl"
                alt=""
              />
              <span class="name">{{
                playlist && playlist.creator.nickname
              }}</span>
              <i class="el-icon-arrow-right"></i>
            </div>
            <div class="detail"></div>
          </div>
        </div>
        <div class="top-options">
          <div class="wrapper" v-show="status">
            <div class="top-options-item">
              <i class="iconfont icon-c_message"></i><span>评论</span>
            </div>
            <div class="top-options-item">
              <i class="iconfont icon-fenxiang"></i><span>分享</span>
            </div>
            <div class="top-options-item">
              <i class="iconfont icon-xiazai"></i><span>下载</span>
            </div>
            <div class="top-options-item">
              <i class="iconfont icon-duoxuan"></i><span>多选</span>
            </div>
          </div>
        </div>
      </div>
      <div slot="main" class="main">
        <router-link
          :to="{
            path: `/song/${item.id}`,
            query: {
              title: item.name,
              name: item.ar[0].name,
              coverImg: item.al.picUrl
            }
          }"
          class="main-item"
          v-for="(item, index) in data"
          :key="index"
        >
          <div class="left">
            <span class="order">{{ index + 1 }}</span>
            <div class="detail">
              <span class="title">{{ item.name }}</span>
              <span class="author">{{
                `${item.ar[0].name} - ${item.al.name}`
              }}</span>
            </div>
          </div>
          <div class="right">
            <i class="play iconfont icon-shipin"></i>
            <i class="more iconfont icon-msnui-more"></i>
          </div>
        </router-link>
      </div>
    </me-playlist>
  </div>
</template>
<script>
import MePlaylist from '@comp/playlist'
import PlaylistHeader from './header'
import { axiosGet } from '@assets/js/query'
import { ROUTER } from './config'
import MeLoading from '@comp/loading'
export default {
  name: 'playlist',
  data() {
    return {
      playlist: '',
      data: [],
      status: true
    }
  },
  created() {
    this.init()
  },
  methods: {
    async init() {
      const res = await this.getData()
      const { data, playlist } = res
      this.data = data
      this.playlist = playlist
    },
    async getData() {
      const { id } = this.$route.params
      const res = await axiosGet(ROUTER.playDetail, { id })
      const data = res.playlist.tracks
      const { playlist } = res
      return { data, playlist }
    },
    changeStatusIn() {
      this.status = false
    },
    changeStatusOut() {
      this.status = true
    }
  },
  components: {
    MePlaylist,
    PlaylistHeader,
    MeLoading
  }
}
</script>
<style lang="scss" scoped>
@import '~@assets/scss/mixins';
.playlist {
  width: 100%;
  height: 100%;
  .top-blur {
    position: absolute;
    background: {
      size: cover;
      repeat: no-repeat;
      position: center;
    }
    height: 7.8rem;
    width: 100%;
    filter: blur(1rem);
  }
  .top {
    overflow: hidden;
    position: relative;
    width: 100%;
    color: #000;
    height: 7.8rem;
    &-content {
      padding: 1.8rem 0.5rem 0.5rem;
      position: relative;
      overflow: hidden;
      width: 100%;
      height: 5rem;
      z-index: 10;
      @include flex-between();
      &-img {
        // margin-top: 1.8rem;
        // position: relative;
        display: block;
        width: 3.5rem;
        height: 3.5rem;
        border-radius: 0.35rem;
      }
      &-right {
        // flex: 1;
        height: 100%;
        padding-left: 0.55rem;
        @include flex-center(column);
        justify-content: flex-start;
        align-items: flex-start;
        .title {
          width: 60%;
          color: #fff;
          font-size: 0.4rem;
          line-height: 0.5rem;
          @include ellipsis();
        }
        .creator {
          height: 1.5rem;
          @include flex-center();
          .avator {
            height: 0.75rem;
            width: 0.75rem;
            display: inline-block;
            border-radius: 50%;
          }
          .name {
            width: 60%;
            font-size: 0.35rem;
            color: #afaeaf;
            display: inline-block;
            @include ellipsis();
            padding: 0 0.2rem;
            & + i {
              font-size: 0.4rem;
              color: #afaeaf;
            }
          }
        }
      }
    }
    &-options {
      color: #fff;
      position: relative;
      padding: 0.8rem 0.5rem;
      height: 2.5rem;
      .wrapper {
        @include flex-between();
      }
      &-item {
        @include flex-center(column);
        line-height: 0.5rem;
        .iconfont {
          font-size: 0.45rem;
        }
        &:nth-child(1) {
          .iconfont {
            font-size: 0.6rem;
          }
        }
        &:nth-child(3) {
          .iconfont {
            font-size: 0.7rem;
          }
        }
      }
    }
  }
  .main {
    position: relative;
    width: 100%;
    &-item {
      padding-top: 0.4rem;
      @include flex-between();
      .left {
        @include flex-center();
        .order {
          display: inline-block;
          width: 0.8rem;
          padding-right: 0.2rem;
          color: #afaeaf;
          font-size: 0.4rem;
        }
        .detail {
          width: 5.5rem;
          @include flex-center(column);
          align-items: flex-start;
          .title {
            width: 100%;
            font-size: 0.4rem;
            color: #000;
            line-height: 0.5rem;
            @include ellipsis();
          }
          .author {
            width: 100%;
            color: #afaeaf;
            font-size: 0.3rem;
            line-height: 0.5rem;
            @include ellipsis();
          }
        }
      }
      .right {
        width: 1.6rem;
        @include flex-between();
        s .iconfont {
          font-size: 0.45rem;
          color: #afaeaf;
        }
      }
    }
  }
}
</style>
