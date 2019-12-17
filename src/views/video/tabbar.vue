<template>
  <div class="tabbar">
    <div class="tabbar-wrapper">
      <div :scrollX="true" class="scroll" ref="scroll">
        <div class="tabbar-list">
          <router-link
            class="tabbar-list-item"
            :to="`/video/type/${item.id}`"
            v-for="(item, index) in data"
            :key="index"
            :class="{ item_active: now_idx === index }"
            @click.native="changeStatus(index, item.id)"
          >
            {{ item.name }}
          </router-link>
        </div>
      </div>
    </div>
    <div class="tabbar-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { axiosGet } from '@assets/js/query'
import { ROUTER } from './config'
import BScroll from 'better-scroll'
export default {
  name: 'VideoTabbar',
  data() {
    return {
      data: [],
      now_idx: 0
    }
  },
  created() {
    this.init()
  },
  watch: {
    $route(to) {
      if (to.fullPath === '/video') {
        this.$router.push(`/video/type/${this.data[0].id}`).catch({})
      }
    }
  },
  methods: {
    init() {
      this.getData()
    },
    async getData() {
      const res = await axiosGet(ROUTER.vdo_list)
      const { data } = res
      this.data = data.filter((v, i) => i < 11)
      this.$router.push(`/video/type/${data[0].id}`).catch(err => {})
    },
    changeStatus(idx, typeid) {
      this.now_idx = idx
      console.log(typeid)
    }
  },
  mounted() {
    this.$nextTick(() => {
      if (!this.scroll) {
        this.scroll = new BScroll(this.$refs.scroll, {
          click: true,
          scrollX: true
        })
      } else if (!this.$refs.scroll) {
        return 0
      } else this.scroll.refresh()
    })
  }
}
</script>

<style lang="scss" scoped>
@import '~@assets/scss/mixins';
.tabbar {
  width: 100%;
  margin-top: 1rem;
  height: 1rem;
  // padding: 0.3rem;
  &-wrapper {
    width: 100%;
    border-bottom: 1px solid #eee;
  }

  &-list {
    width: 22rem;
    height: 1rem;
    @include flex-center();
    justify-content: space-around;
    &-item {
      display: block;
      height: 1rem;
      // width: 2rem;
      text-align: center;
      line-height: 1rem;
    }
  }
}
.scroll {
  width: 100%;
  height: 1rem;
  overflow: hidden;
}
.item_active {
  border-bottom: 2px solid $theme;
}
</style>
