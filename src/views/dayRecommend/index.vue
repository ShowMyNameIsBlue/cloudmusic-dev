<template>
  <div class="recommend" ref="recommend" @scroll="scroll">
    <recommend-header class="c-header-container"></recommend-header>
    <div class="c-content-container">
      <div ref="scroll" class="scroll">
        <!-- <img class="recommend-pic" src="" alt="" /> -->
        <div
          class="recommend-list "
          ref="scroll1"
          :class="{ list_active: isScroll }"
        >
          <div class="test"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RecommendHeader from './header'
export default {
  name: 'dayRecommend',
  data() {
    return {
      first: false,
      isScroll: false
    }
  },
  components: {
    RecommendHeader
  },
  methods: {
    scroll() {
      if (this.$refs.recommend.scrollTop > 120) {
        this.isScroll = true
        this.first = true
      }
      if (this.first && this.$refs.recommend.scrollTop === 0) {
        this.isScroll = false
        this.first = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.recommend {
  width: 100%;
  height: 100%;
  overflow: scroll;
  padding-top: 1.25rem;
  &-pic {
    display: block;
    height: 4.75rem;
    width: 100%;
    background: red;
  }
  &-list {
    height: 100%;
    width: 100%;
    background: blanchedalmond;
    border-radius: 0.5rem 0.5rem 0 0;
    padding-top: 4rem;
    overflow: hidden;
    margin-top: 3.5rem;
  }
  .list_active {
    overflow: scroll;
  }
}
.c-content-container {
  padding: 0;
}
.scroll {
  width: 100%;
  height: 100%;
}
.test {
  width: 100%;
  height: 20rem;
  background: gold;
}
</style>
