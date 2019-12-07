<template>
  <div class="phone">
    <me-navbar class="header g-header-container" title="手机号验证">
      <i slot="left" class="el-icon-arrow-left" @click="backs"></i>
    </me-navbar>
    <div class="p">
      <p class="p-notice">验证码已经发送至</p>
      <span class="p-number">{{ usernumber }}</span>
      <span class="p-countdown">{{ time }}s</span>
      <div class="p-code">
        <input type="number" maxlength="1" />
        <input type="number" maxlength="1" />
        <input type="number" maxlength="1" />
        <input type="number" maxlength="1" />
      </div>
    </div>
  </div>
</template>

<script>
import MeNavbar from '@comp/navbar'
import { setInterval, clearInterval } from 'timers'
export default {
  name: 'PStep2s',
  components: {
    MeNavbar
  },
  data() {
    return {
      status: false,
      usernumber: '156****6236',
      time: 3
    }
  },
  methods: {
    backs() {
      this.$emit('back2', { id: 2 })
      this.clear()
    },
    setusernumber(usernumber) {
      this.usernumber = `+86 ${usernumber.replace(
        usernumber.slice(3, 7),
        '****'
      )}`
    },
    countdown() {
      const vm = this
      const t = setInterval(() => {
        vm.time--
        if (vm.time === 0) {
          clearInterval(t)
        }
      }, 1000)
    }
  },
  mounted() {
    this.countdown(3)
  }
}
</script>

<style lang="scss" scoped>
@import '~@assets/scss/mixins';
.header {
  font-size: 0.45rem;
  font-weight: bold;
  color: #000;
}
.phone {
  height: 100%;
  width: 100%;
  background: #fff;
}
.p {
  padding: 0.4rem;
  &-notice {
    margin-top: 1.5rem;
    font-weight: bold;
    color: #000;
    font-size: 0.45rem;
    padding-bottom: 0.45rem;
  }
  &-number {
    font-size: 0.4rem;
    color: #999;
  }
  &-countdown {
    font-size: 0.4rem;
    color: #999;
    display: inline-block;
    position: absolute;
    right: 0.4rem;
  }
  &-code {
    margin-top: 1.125rem;
    height: 1rem;

    @include flex-between();
    & input {
      font-size: 0.8rem;
      padding: 0 0.25rem;
      width: 20%;
      border-bottom: 1px solid #999;
      text-align: center;
    }
  }
}
</style>
