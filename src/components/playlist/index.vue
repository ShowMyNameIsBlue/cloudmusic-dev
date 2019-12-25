<template>
  <div class="recommend" ref="recommend" @scroll="scroll">
    <div class="c-content-container">
      <div class="header">
        <slot name="top"></slot>
      </div>
      <div class="playall">
        <i class="iconfont icon-bofang"> 播放全部</i>
        <i class="iconfont icon-gengduo"><span> 多选</span></i>
      </div>
      <me-loading v-if="data.length === 0"></me-loading>
      <div class="recommend-list " :class="{ list_active: isScroll }">
        <slot name="main"></slot>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
import MeLoading from '@comp/loading'
export default {
  name: 'MePlaylist',
  data() {
    return {
      first: false,
      isScroll: false,
      playId: ''
    }
  },
  props: {
    data: {
      type: Array,
      defaultL: []
    }
  },
  methods: {
    playsong(idx) {
      this.playId = idx
    },
    scroll() {
      console.log(this.$refs.recommend.scrollTop)
      if (this.$refs.recommend.scrollTop > 230) {
        this.isScroll = true
        this.first = true
      }

      if (this.first && this.$refs.recommend.scrollTop === 0) {
        this.isScroll = false
        this.first = false
      }
      if (this.$refs.recommend.scrollTop > 180) {
        this.$emit('scrollin')
      } else {
        this.$emit('scrollout')
      }
    }
  },

  components: {
    MeLoading
  }
}
</script>

<style lang="scss" scoped>
@import '~@assets/scss/mixins';
.recommend {
  width: 100%;
  height: 100%;
  overflow: scroll;
  // padding-top: 2rem;

  &-pic {
    display: block;
    height: 4.75rem;
    width: 100%;
    background: red;
  }
  .header {
    width: 100%;
  }
  .playall {
    line-height: 0.4rem;
    margin-top: -0.4rem;
    border-radius: 0.5rem 0.5rem 0 0;
    height: 1rem;
    background: #fff;
    padding: 0.4rem;
    position: relative;
    @include flex-between();
    .icon-bofang {
      color: #000;
      font-size: 0.4rem;
    }
    .icon-gengduo {
      font-size: 0.3rem;
    }
    span {
      font-size: 14px;
    }
  }
  &-list {
    height: 85%;
    width: 100%;
    background: #fff;
    overflow: hidden;
    padding: 0 0.4rem;
    padding-bottom: 0;
  }
  .list_active {
    overflow: scroll;
  }
}
.c-content-container {
  padding: 0;
}
</style>
