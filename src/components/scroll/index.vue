<template>
  <div class="scroll" ref="scroll">
    <slot />
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'MeScroll',
  props: {
    scrollX: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.$nextTick(() => {
      if (!this.scroll) {
        this.scroll = new BScroll(this.$refs.scroll, {
          click: true,
          scrollX: this.scrollX
        })
      } else if (!this.$refs.scroll) return 0
      else this.scroll.refresh()
    })
  }
}
</script>

<style lang="scss">
.scroll {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
