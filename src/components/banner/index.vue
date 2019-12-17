<template>
  <div class="banner">
    <swiper :options="swiperOption" :key="keyId">
      <slot />
      <div class="swiper-pagination" v-if="pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper } from 'vue-awesome-swiper'
export default {
  name: 'MeBanner',
  data() {
    return {
      keyId: Math.random()
    }
  },
  props: {
    pagination: {
      type: Boolean,
      default: false
    },
    data: {
      type: Array
    },
    interval: {
      default: 3000
    },
    loop: {
      type: Boolean,
      default: true
    },
    direction: {
      type: String,
      default: 'horizontal',
      validator(value) {
        return ['horizontal', 'vertical'].indexOf(value) > -1
      }
    },
    slidesPerView: {
      default: 1
    }
  },
  watch: {
    data(newData) {
      if (newData.length === 0) return
      this.swiperOption.loop = this.data.length <= 1 ? false : this.loop
      this.keyId = Math.random()
    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      this.swiperOption = {
        watchOverflow: true,
        direction: this.direction,
        autoplay: this.interval
          ? {
              delay: this.interval,
              disableOnInteraction: false
            }
          : false,
        slidesPerView: this.slidesPerView,
        loop: this.data.length <= 1 ? false : this.loop,
        pagination: {
          el: this.pagination ? '.swiper-pagination' : null
        }
      }
    }
  },
  components: {
    swiper
  }
}
</script>
