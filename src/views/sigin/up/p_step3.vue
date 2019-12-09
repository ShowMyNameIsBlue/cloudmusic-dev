<template>
  <div class="phone">
    <me-navbar class="header g-header-container" title="手机号验证">
      <i slot="left" class="el-icon-arrow-left" @click="backs"></i>
    </me-navbar>
    <div class="p">
      <p class="p-notice">验证码已经发送至</p>
      <span class="p-number">+86 {{ usernumber }}</span>
      <span class="p-countdown">{{ time }}s</span>
      <div class="p-code">
        <input class="inp" type="number" @input="limit(0)" v-model="code[0]" />
        <input class="inp" type="number" @input="limit(1)" v-model="code[1]" />
        <input class="inp" type="number" @input="limit(2)" v-model="code[2]" />
        <input class="inp" type="number" @input="limit(3)" v-model="code[3]" />
      </div>
      <el-button class="p-btn" @click.native="getCode" v-show="!time"
        >重新发送</el-button
      >
    </div>
  </div>
</template>

<script>
import MeNavbar from '@comp/navbar'
import { setInterval, clearInterval } from 'timers'
import { ROUTER, DETAULT_NAME } from '../config'
import { axiosGet } from '@assets/js/query'
import getLoginStatus from '@api/loginStatus'
export default {
  name: 'PStep3',
  components: {
    MeNavbar
  },
  data() {
    return {
      status: false,
      usernumber: '',
      time: 60,
      code: [],
      userInfo: {}
    }
  },
  watch: {
    async code() {
      if (this.code.length === 4) {
        const result = await axiosGet(ROUTER.captcha, {
          phone: this.userInfo.usernumber,
          captcha: this.code.join().replace(/,/g, '')
        })
        if (result.code === 200) {
          if (this.userInfo.isRegister) {
            const res = await axiosGet(ROUTER.register, {
              phone: this.userInfo.usernumber,
              captcha: this.code.join().replace(/,/g, ''),
              password: this.userInfo.password,
              nickname: DETAULT_NAME
            })
            if (res.code === 200) {
              const r = await axiosGet(ROUTER.login, {
                phone: this.userInfo.usernumber,
                password: this.userInfo.password
              })
              if (r.code === 200) {
                const res = await getLoginStatus()
                this.$store.commit('updateloginStatus', res)
                this.$router.push('/')
              }
            }
          } else this.next()
        }
      }
    }
  },
  methods: {
    next() {
      this.$emit('next3', { id: 3, code: this.code })
      this.clear()
    },
    backs() {
      this.$emit('back3', { id: 3 })
      this.clear()
    },
    setusernumber(usernumber) {
      this.usernumber = `${usernumber.replace(usernumber.slice(3, 7), '****')}`
    },
    countdown() {
      const vm = this
      const t = setInterval(() => {
        vm.time--
        if (vm.time === 0) {
          clearInterval(t)
        }
      }, 1000)
    },
    limit(i) {
      if (this.code[i].length > 1) this.code[i] = this.code[i].slice(0, 1)
    },
    clear() {
      this.code = []
      this.time = 60
    },
    updateUserInfo(userInfo) {
      if (JSON.stringify(userInfo) !== '{}') {
        this.setusernumber(userInfo.usernumber)
        this.userInfo = userInfo
        this.getCode()
      }
    },
    async getCode() {
      this.clear()
      this.countdown()
      const code = await axiosGet(ROUTER.ctcode, {
        phone: this.userInfo.usernumber
      })
      if (code === 200) return true
      return false
    }
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
  position: absolute;
  z-index: $tabbar-z-index + 10;
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
    & .inp {
      font-size: 0.8rem;
      padding: 0 0.25rem;
      width: 20%;
      text-align: center;
      border-bottom: 1px solid #ddd;
    }
  }
  &-btn {
    margin-top: 1rem;
    width: 100%;
    height: 0.95rem;
    border-radius: 0.425rem;
    background: $theme;
    color: #fff;
    border: none;
  }
}
</style>
