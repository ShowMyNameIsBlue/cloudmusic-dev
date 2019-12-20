<template>
  <me-navbar class="header">
    <i slot="left" class="iconfont icon-tianjiahaoyou"></i>
    <div slot="center" class="center">
      <span
        class="center-item"
        @click="change(1)"
        :class="{ item_active: active }"
        >广场</span
      >
      <span
        class="center-item"
        @click="change(2)"
        :class="{ item_active: !active }"
        >动态</span
      >
    </div>
    <div slot="right">
      <me-icon class="right"></me-icon>
    </div>
  </me-navbar>
</template>

<script>
import MeNavbar from '@comp/navbar'
import MeIcon from '@comp/rightIcon'
export default {
  name: 'CsHeader',
  data() {
    return {
      active: true,
      search: true
    }
  },
  components: {
    MeNavbar,
    MeIcon
  },
  methods: {
    change(id) {
      if (this.active && id === 2) {
        this.active = false
        this.$emit('changeContent', id)
      } else if (!this.activeid && id === 1) {
        this.active = true
        this.$emit('changeContent', id)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@assets/scss/mixins';
.icon-tianjiahaoyou {
  font-size: 0.625rem;
}
.center {
  margin: 0 auto;
  width: 4rem;
  @include flex-between();
  // justify-content: space-around;
  &-item {
    font-size: 0.45rem;
    font-weight: bold;
    color: #444;
    display: inline-block;
    height: 100%;
    padding-bottom: 0.3rem;
    position: relative;
    top: 0.2rem;
  }
}
.item_active {
  color: $theme;
  border-bottom: 2px solid $theme;
}
</style>
