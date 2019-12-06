<template>
  <transition name="c-warnning">
    <div class="warnning" v-show="warn">
      <i :class="icon"></i>
      <p v-html="content"></p>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'MeWarn',
  data() {
    return {
      warn: false,
      content: '操作不正确'
    }
  },
  props: {
    icon: {
      type: String,
      default: ''
    }
  },
  methods: {
    show(msg) {
      this.content = msg
      const t = this
      t.warn = true
      setTimeout(() => {
        t.warn = false
      }, 2000)
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~@assets/scss/mixins';
.warnning {
  width: 50%;
  height: 2rem;
  border-radius: 0.25rem;
  @include flex-center(column);
  padding: 0.35rem;
  text-align: center;
  color: #fff;
  background: rgba($color: #000000, $alpha: 0.8);
  font-size: 0.35rem;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  transform: translateY(-20%);
}
i {
  font-size: 0.8rem;
  line-height: 1.2rem;
}

.c-warnning {
  &-enter-active,
  &-leave-active {
    transition: opacity 0.3s;
  }
  &-leave-to,
  &-enter {
    opacity: 0;
  }
}
</style>
