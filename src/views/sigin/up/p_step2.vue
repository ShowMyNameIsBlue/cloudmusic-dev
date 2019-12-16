<template>
  <div class="phone">
    <me-navbar class="header g-header-container" title="手机号登录">
      <i slot="left" class="el-icon-arrow-left" @click="backs"></i>
    </me-navbar>
    <div class="p">
      <div class="p-number">
        <input placeholder="输入密码" type="password" v-model="password" />
        <i class="iconfont icon-cha icon" v-show="password" @click="clear"></i>
      </div>
      <el-button class="p-btn" @click.native="next">立即登录</el-button>
      <div @click="resetPWD" class="p-new">
        重设密码 <i class="el-icon-arrow-right"></i>
      </div>
    </div>
    <me-warn ref="warn" icon="iconfont icon-cha"></me-warn>
  </div>
</template>

<script>
import MeNavbar from '@comp/navbar'
import { axiosGet } from '@assets/js/query'
import MeWarn from '@comp/warn'
import { PASSORD_WARN, ROUTER, PASSORD_ERR } from '../config'
import getLoginStatus from '@api/loginStatus'
export default {
  name: 'PStep2',
  components: {
    MeNavbar,
    MeWarn
  },
  data() {
    return {
      status: false,
      password: '',
      userInfo: {}
    }
  },
  methods: {
    backs() {
      this.$emit('back2', { id: 2 })
      this.clear()
    },
    next() {
      if (!this.password) return
      if (this.password.length < 6) {
        this.$refs.warn.show(PASSORD_WARN)
      } else {
        const { usernumber } = this.userInfo
        this.login({ password: this.password, usernumber })
      }
    },
    resetPWD() {
      this.$emit('next2', { id: 4 })
    },
    updateUserInfo(userInfo) {
      if (JSON.stringify(userInfo) !== '{}') this.userInfo = userInfo
    },
    clear() {
      this.password = ''
    },
    async login({ usernumber, password }) {
      if (usernumber && password) {
        const result = await axiosGet(ROUTER.login, {
          phone: usernumber,
          password
        })
        if (result && result.account && result.profile) {
          this.clear()
          const res = await getLoginStatus()
          this.$store.commit('updateloginStatus', res)
          this.$router.push('/')
        } else this.$refs.warn.show(PASSORD_ERR)
      }
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
  padding: 0.25rem;

  &-number {
    padding-bottom: 1rem;
    margin-top: 1.125rem;
    height: 0.625rem;
    font-size: 0.45rem;
    border-bottom: 1px solid #e6e6e6;
    & input {
      padding: 0 0.25rem;
      font-size: 0.45rem;
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
  &-new {
    text-align: center;
    @include flex-center();
    margin-top: 0.5rem;
  }
}

.icon {
  position: absolute;
  right: 0.5rem;
  color: #999;
  margin-top: 0.2rem;
  font-size: 0.3rem;
}
</style>
