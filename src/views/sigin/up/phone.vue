<template>
  <div class="phone">
    <p-step1 v-show="pstep1" @next1="next"></p-step1>
    <p-step2 v-show="pstep2" @back2="back" ref="pstep2"></p-step2>
    <p-step2s v-show="true"></p-step2s>
  </div>
</template>

<script>
import PStep1 from './p_step1'
import PStep2 from './p_step2'
import PStep2s from './p-step2s'

export default {
  name: 'UpPhone',

  data() {
    return {
      pstep1: false,
      pstep2: false,
      userInfo: {}
    }
  },
  methods: {
    initStatus() {
      const t = this
      const object = this.$data
      for (const key in object) {
        if (object.hasOwnProperty(key) && key !== 'userInfo') t[key] = false
      }
    },
    next(res) {
      this.initStatus()
      this.updateUserInfo(res)
      const id = res.id
      const next = `pstep${id + 1}`
      this[next] = true
      this.$refs[next].updateUserInfo(this.userInfo)
    },
    back(res) {
      this.initStatus()
      const id = res.id
      this[`pstep${id - 1}`] = true
    },
    updateUserInfo(res) {
      const t = this
      for (const key in res) {
        if (res.hasOwnProperty(key) && key !== 'id') t.userInfo[key] = res[key]
      }
    }
  },
  components: {
    PStep1,
    PStep2,
    PStep2s
  }
}
</script>

<style lang="scss" scoped>
.phone {
  height: 100%;
  width: 100%;
}
</style>
