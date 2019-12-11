<template>
  <div class="banner">
    <me-banner :data="data" :pagination="pagination">
      <swiper-slide v-for="(item, index) in data" :key="index">
        <me-loading v-if="data.length === 0"></me-loading>
        <div class="slide">
          <a :href="item.url"
            ><img class="img" :src="item.pic" alt="" />
            <span class="title" :style="{ background: item.titleColor }">{{
              item.typeTitle
            }}</span>
          </a>
        </div>
      </swiper-slide>
    </me-banner>
  </div>
</template>

<script>
import MeBanner from '@comp/banner'
import { axiosGet } from '@assets/js/query'
import { ROUTER } from './config'
import { swiperSlide } from 'vue-awesome-swiper'
import MeLoading from '@comp/loading'
export default {
  name: 'HomeBanner',
  data() {
    return {
      data: [],
      pagination: true
    }
  },
  components: {
    MeBanner,
    swiperSlide,
    MeLoading
  },
  created() {
    this.getBanners()
  },
  methods: {
    async getBanners() {
      const res = await axiosGet(ROUTER.banners, { type: 2 })
      if (res) {
        this.data = res.banners
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~@assets/scss/mixins';
.banner {
  width: 8.625rem;
  height: 3.68rem;
  margin: 0.3rem auto;
  position: relative;
  border-radius: 0.25rem;
  overflow: hidden;
}
.slide {
  .img {
    width: 100%;
    height: 3.375rem;
  }
  .title {
    display: block;
    width: 1.4rem;
    height: 0.45rem;
    line-height: 0.45rem;
    position: absolute;
    bottom: 0;
    right: 0;
    color: #fff;
    font-size: 0.3rem;
    text-align: center;
    border-radius: 0.25rem 0 0.25rem 0;
  }
}
</style>
