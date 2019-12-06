<template>
  <div class="phone">
    <p-step1 v-show="pstep1" @next1="next"></p-step1>
    <p-step2 v-show="pstep2" @next2="next" @back2="back"></p-step2>
  </div>
</template>

<script>
import PStep1 from './p_step1'
import PStep2 from './p_step2'

export default {
  name: 'UpPhone',

  data() {
    return {
      pstep1: true,
      pstep2: false
    }
  },
  methods: {
    initStatus() {
      const t = this
      const object = this.$data
      for (const key in object) if (object.hasOwnProperty(key)) t[key] = false
    },
    next(id) {
      this.initStatus()
      this[`pstep${id + 1}`] = true
    },
    back(id) {
      this.initStatus()
      this[`pstep${id - 1}`] = true
    },
    test(e) {
      console.log(e)
    }
  },
  components: {
    PStep1,
    PStep2
  }
}
</script>

<style lang="scss" scoped>
.phone {
  height: 100%;
  width: 100%;
}
</style>
