<template>
  <div class="new">
    <div class="new-title">
      <span @click="change(1)" class="dish" :class="{ active: dish }"
        >新碟</span
      >
      <span @click="change(2)" class="song" :class="{ active: song }"
        >新歌</span
      >
      <router-link class="more" v-show="dish" to="/">更多新碟</router-link>
      <router-link class="more" v-show="song" to="/">新歌推荐</router-link>
    </div>
    <div class="new-content">
      <router-link
        class="new-content-item"
        to="/"
        v-for="(item, index) in data"
        :key="index"
      >
        <img class="img" :src="item.img" alt="" />
        <span class="desc">{{ item.desc }}</span>
        <span class="auth">{{ item.auth }}</span>
      </router-link>
    </div>
  </div>
</template>
<script>
import { axiosGet } from '@assets/js/query'
import { ROUTER } from './config'
export default {
  name: 'HomeNew',
  data() {
    return {
      dish: true,
      song: false,
      data: []
    }
  },
  created() {
    this.init()
  },
  methods: {
    async init() {
      this.getNew(1)
    },
    change(id) {
      if (id === 1 && this.dish === true) return 0
      if (id === 2 && this.song === true) return 0
      else {
        this.dish = !this.dish
        this.song = !this.song
        if (id === 1) {
          this.getNew(1)
        } else {
          this.getNew(2)
        }
      }
    },
    async getNew(id) {
      let arr = []
      this.data = []
      if (id === 1) {
        const res = await axiosGet(ROUTER.topalbum)
        const { albums } = res
        for (let i = 0; i < 3; i++) {
          let img = albums[i].picUrl
          let desc = albums[i].name
          let auth = albums[i].artists[0].name
          arr[i] = { img, desc, auth }
        }
      } else {
        const res = await axiosGet(ROUTER.topsong, { type: 0 })
        const { data } = res
        for (let i = 0; i < 3; i++) {
          let img = data[i].album.blurPicUrl
          let desc = data[i].album.name
          let auth = data[i].album.artists[0].name
          arr[i] = { img, desc, auth }
        }
      }
      this.data = arr
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~@assets/scss/mixins';
.new {
  padding: 0 0.5rem;
  font-size: 0.4rem;
  height: 200px;
  &-title {
    height: 0.8rem;
    margin-bottom: 0.5rem;
    .dish,
    .song {
      display: inline-block;
      line-height: 0.8rem;
      width: 1.2rem;
      color: #999;
    }
    .dish {
      text-align: left;
    }
    .song {
      text-align: right;
      border-left: 1px solid #eee;
    }
    .active {
      font-size: 0.4rem;
      font-weight: bold;
      color: #555;
    }
    .more {
      position: absolute;
      right: 0.5rem;
      display: inline-block;
      line-height: 0.8rem;
      padding: 0 0.125rem;
      border: 1px solid #eee;
      border-radius: 0.25rem;
    }
  }
  &-content {
    @include flex-between();
    &-item {
      width: 2.6rem;
      font-size: 0.3rem;
      @include flex-center(column);
      .img {
        display: block;
        width: 2.6rem;
        width: 2.6rem;
        border-radius: 0.25rem;
      }
      span {
        display: inline-block;
        width: 100%;
        text-align: left;
        padding-top: 0.1rem;
        &.desc {
          @include ellipsis();
          font-size: 0.35rem;
          color: #999;
        }
        &.auth {
          @include ellipsis();
          line-height: 0.4rem;
        }
      }
    }
  }
}
</style>
