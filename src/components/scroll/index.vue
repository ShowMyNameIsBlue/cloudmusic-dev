<template>
  <div class="scroll" ref="scroll" @refresh="init">
    <div>
      <slot />
      <div class="pullUp" v-if="dropUp"><me-loading inline></me-loading></div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import MeLoading from '@comp/loading'
export default {
  name: 'MeScroll',
  data() {
    return {
      dropUp: false,
      upEnd: false
    }
  },
  props: {
    scrollX: {
      type: Boolean,
      default: false
    },
    data: {
      type: [Array, Object]
    },
    pullUp: {
      type: Boolean,
      default: false
    },
    probeType: {
      type: Number,
      default: 0
    }
  },
  watch: {
    data() {
      this.init()
    },
    upEnd(newvalue) {
      if (newvalue) {
        this.scroll.finishPullUp()
        this.dropUp = false
        this.scroll.refresh()
      }
    }
  },
  components: {
    MeLoading
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.scroll, {
            click: true,
            scrollX: this.scrollX,
            pullUpLoad: {
              threshold: 0
            }
          })
          if (this.pullUp) this.scroll.on('pullingUp', this.updateData)
        } else if (!this.$refs.scroll) return 0
        else this.scroll.refresh()
      })
    },
    updateData() {
      this.dropUp = true
      this.scroll.refresh()
      this.$emit('pullUpBegin')
    },
    pullUpEnd() {
      this.upEnd = true
    },
    getScroll() {
      if (!this.scroll) {
        return new BScroll(this.$refs.scroll, {
          click: true,
          probeType: this.probeType
        })
      } else return this.scroll
    }
  }
}
</script>

<style lang="scss">
.scroll {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.pullUp {
  width: 100%;
  height: 1rem;
}
</style>
