<template>
  <div class="phone">
    <p-step1 v-show="pstep1" @next1="next"></p-step1>
    <p-step2 v-show="pstep2" @back2="back" @next2="next" ref="pstep2"></p-step2>
    <p-step3 v-show="pstep3" @next3="next" @back3="back" ref="pstep3"></p-step3>
    <p-step4 v-show="pstep4" @back4="back" ref="pstep4"></p-step4>
    <p-step5 v-show="pstep5" @back5="back" @next5="next" ref="pstep5"></p-step5>
  </div>
</template>

<script>
import PStep1 from './p_step1'
import PStep2 from './p_step2'
import PStep3 from './p_step3'
import PStep4 from './p_step4'
import PStep5 from './p_step5'

export default {
  name: 'UpPhone',

  data() {
    return {
      pstep1: true,
      pstep2: false,
      pstep3: false,
      pstep4: false,
      pstep5: false,
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
    PStep3,
    PStep4,
    PStep5
  }
}
</script>

<style lang="scss" scoped>
.phone {
  height: 100%;
  width: 100%;
}
</style>
