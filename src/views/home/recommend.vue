<template>
  <div class="recommend">
    <div class="recommend-title">
      <span class="left">推荐歌单</span>
      <span class="right">歌单广场</span>
    </div>
    <div class="recommend-content">
      <router-link
        class="recommend-content-item"
        to="/"
        v-for="(item, index) in data"
        :key="index"
      >
        <i class="iconfont icon-kongxinsanjiao-first">{{
          playcount(item.playCount, item.playcount)
        }}</i>
        <img class="img" :src="item.picUrl" alt="" />
        <p class="desc">{{ item.name }}</p>
      </router-link>
    </div>
  </div>
</template>
<script>
import { axiosGet } from '@assets/js/query'
import { ROUTER } from './config'
export default {
  name: 'HomeRecommend',
  data() {
    return {
      data: []
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    async init() {
      const loginStatus = this.$store.state.loginStatus
      let res = []
      if (loginStatus && loginStatus.profile) {
        res = await axiosGet(ROUTER.recommend)
        res = res.recommend
      } else {
        res = await axiosGet(ROUTER.personalized, { limit: 6 })
        res = res.result
      }
      this.data = res.filter((v, i) => {
        return i < 6
      })
    },
    playcount(num1, num2) {
      const number = num1 ? num1.toString() : num2.toString()
      if (number.length >= 9) {
        return number.replace(/\d{8}$/g, '亿')
      } else if (number.length >= 5) return number.replace(/\d{4}$/g, '万')
      else return number
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~@assets/scss/mixins';
.recommend {
  height: 10rem;
  padding: 0.5rem;
  &-title {
    height: 0.75rem;
    .left {
      font-size: 0.45rem;
      font-weight: bold;
      line-height: 0.75rem;
    }
    .right {
      display: inline-block;
      position: absolute;
      right: 0.5rem;
      font-size: 0.4rem;
      width: 1.875rem;
      height: 0.75rem;
      border-radius: 0.25rem;
      border: 1px solid #ddd;
      text-align: center;
      line-height: 0.625rem;
    }
  }
  &-content {
    @include flex-between();
    flex-wrap: wrap;

    margin-top: 0.4rem;
    &-item {
      position: relative;
      width: 2.6rem;
      height: 3.75rem;
      margin-top: 0.25rem;
      .iconfont {
        position: absolute;
        right: 0.1rem;
        top: 0.125rem;
        color: #fff;
        font-size: 0.3rem;
      }
      .img {
        width: 2.6rem;
        height: 2.6rem;
        border-radius: 0.25rem;
      }
      .desc {
        font-size: 0.4rem;
        @include multiline-ellipsis();
        text-align: left;
        color: #000;
        font-size: 0.35rem;
        padding-top: 0.25rem;
      }
    }
  }
}
</style>
