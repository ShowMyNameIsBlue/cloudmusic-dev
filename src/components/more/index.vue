<template>
  <transition name="more">
    <div class="more">
      <div class="more-wrapper">
        <span class="one">更多</span>
        <i @click="end" class="iconfont icon-cha">
          <span>{{ content }}</span></i
        >
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'MeMore',
  props: {
    content: {
      type: String,
      default: '删除此项'
    }
  },
  methods: {
    end() {
      this.$emit('end')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@assets/scss/mixins';
.more {
  display: fixed;
  height: 16.675rem;
  width: 100%;
  left: 0;
  top: 0;
  z-index: $search-z-index;
  background: rgba($color: #000, $alpha: 0.2);
  &-wrapper {
    position: absolute;
    height: 2.5rem;
    width: 100%;
    border-radius: 0.5rem 0.5rem 0 0;
    left: 0;
    bottom: 0;
    background: #fff;
    & .one {
      display: block;
      color: #999;
      line-height: 1.25rem;
      text-indent: 0.5rem;
      border-bottom: 1px solid #dddd;
    }
    & .iconfont {
      color: #000;
      font-size: 0.4rem;
      line-height: 1.25rem;
      padding-left: 0.5rem;
      & span {
        padding-left: 0.5rem;
      }
    }
  }
}
</style>
