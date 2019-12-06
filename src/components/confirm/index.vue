<template>
  <transition name="c-confirm">
    <div class="c-confirm-wrapper" v-show="visible">
      <div class="c-confirm">
        <div class="c-confirm-title" v-if="title">{{ title }}</div>
        <div class="c-confirm-msg">{{ msg }}</div>
        <div class="btns">
          <button class="btns-confirm c-confirm-cancel" @click="cancel">
            {{ cancelBtnText }}
          </button>
          <button class="btns-confirm c-confirm-ok" @click="confirm">
            {{ confirmBtnText }}
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>
<style lang="scss" scoped>
@import '~@assets/scss/mixins';
.c-confirm-wrapper {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: $search-popup-z-index;
  @include flex-center();
  background: rgba($color: #eee, $alpha: 0.1);
}

.c-confirm {
  width: 80%;
  background: #eee;
  font-size: 0.4rem;
  border-radius: 0.375rem;
  &-title {
    font-size: 0.45rem;
    font-weight: bold;
    padding: 0.5rem 0 0 0;

    & + .c-confirm-msg {
      padding-top: 0.25rem;
      padding-bottom: 0.5rem;
    }
  }
  &-msg {
    padding-top: 0.8rem;
    padding-bottom: 0.8rem;
  }

  .btns {
    display: flex;

    &-confirm {
      flex: 1;
      height: 1.1rem;
      line-height: 1.1rem;
      text-align: center;
      color: #3478f6;
      font-size: 0.45rem;
      letter-spacing: 0.025rem;
      border-top: 1px #ccc solid;
      background: #eee;
    }
  }
  &-ok {
    border-left: 1px solid #ccc;
    border-radius: 0 0 0.375rem 0;
  }
  &-cancel {
    border-radius: 0 0 0 0.375rem;
  }
}

.c-confirm {
  &-enter-active,
  &-leave-active {
    transition: opacity 0.3s;
  }
  &-enter,
  &-leave-to {
    opacity: 0;
  }
}
</style>

<script>
export default {
  name: 'MeConfirm',
  data() {
    return {
      visible: false
    }
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    msg: {
      type: String,
      default: '确定执行此操作吗'
    },
    cancelBtnText: {
      type: String,
      default: '取消'
    },
    confirmBtnText: {
      type: String,
      default: '确定'
    }
  },
  methods: {
    hide() {
      this.visible = false
    },
    show() {
      this.visible = true
    },
    cancel() {
      this.hide()
      this.$emit('cancel')
    },
    confirm() {
      this.hide()
      this.$emit('confirm')
    }
  }
}
</script>
