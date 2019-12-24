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
    <me-more v-if="showMore" @click.native="back">
      <div>
        <div class="more">更多</div>
        <i class="more-item iconfont icon-cha" @click="deleteThis"
          ><span>不感兴趣</span></i
        >
      </div>
    </me-more>
  </div>
</template>

<script>
import { axiosGet } from '@assets/js/query'
import { ROUTER } from './config'
import BScroll from 'better-scroll'
import MeMore from '@comp/more'
export default {
  name: 'VideoTabbar',
  components: {
    MeMore
  },
  data() {
    return {
      data: [],
      now_idx: 0,
      showMore: false,
      deleIdx: ''
    }
  },
  created() {
    this.init()
  },
  watch: {
    $route(to) {
      if (to.fullPath === '/video') {
        this.$router.push(`/video/type/${this.data[this.now_idx].id}`).catch({})
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
      this.$router.push(`/video/type/${data[0].id}`).catch(err => {
        return err
      })
    },
    changeStatus(idx, typeid) {
      this.now_idx = idx
      // console.log(typeid)
    },

    moreInfo(index) {
      this.deleIdx = index
      this.showMore = true
    },
    back() {
      this.showMore = false
    },
    deleteThis() {
      this.$children[0].deleteThis(this.deleIdx)
    },
    changeNowIdx() {
      this.now_idx = 0
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
  height: 100%;
  // padding: 0.3rem;
  &-wrapper {
    height: 1rem;
    width: 100%;
    border-bottom: 1px solid #eee;
  }
  &-content {
    width: 100%;
    height: 100%;
    padding-bottom: 1.8rem;
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
.more {
  display: block;
  color: #999;
  line-height: 1.25rem;
  text-indent: 0.5rem;
  border-bottom: 1px solid #dddd;
  &-item {
    color: #000;
    font-size: 0.4rem;
    line-height: 1.25rem;
    padding-left: 0.5rem;
    & span {
      padding-left: 0.2rem;
    }
  }
}
</style>
