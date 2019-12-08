<template
  ><div class="phone">
    <me-navbar class="header g-header-container" title="手机号注册">
      <i slot="left" class="el-icon-arrow-left" @click="backs"></i>
    </me-navbar>
    <div class="p">
      <div class="p-number">
        <input
          class="inp"
          placeholder="输入昵称"
          type="text"
          v-model="nickname"
        />
        <i
          class="iconfont icon-cha icon"
          v-show="nickname"
          @click="clear('nickname')"
        ></i>
        <input
          class="inp"
          placeholder="输入新密码"
          type="password"
          v-model="password"
        />
        <i
          class="iconfont icon-cha icon"
          v-show="password"
          @click="clear('password')"
        ></i>
      </div>
      <el-button class="p-btn" @click.native="next">登录</el-button>
    </div>
    <me-warn ref="warn" :icon="icon"></me-warn>
  </div>
</template>

<script>
import MeNavbar from '@comp/navbar'
import { axiosGet } from '@assets/js/query'
import MeWarn from '@comp/warn'
import { PASSORD_WARN, ROUTER, PASSORD_SUC, REGISTER_FILURE } from '../config'
import getLoginStatus from '@api/loginStatus'
export default {
  name: 'PStep4',
  data() {
    return {
      icon: '',
      nickname: '',
      password: '',
      userInfo: {}
    }
  },
  methods: {
    next() {
      if (!this.password || !this.nickname) return
      if (this.password.length < 6) {
        this.icon = 'iconfont icon-cha'
        this.$refs.warn.show(PASSORD_WARN)
      } else {
        const { usernumber, code } = this.userInfo
        this.login({
          usernumber,
          code,
          password: this.password,
          nickname: this.nickname
        })
      }
    },
    backs() {
      this.$emit('back4', { id: 2 })
      this.clear()
    },
    updateUserInfo(userInfo) {
      if (JSON.stringify(userInfo) !== '{}') this.userInfo = userInfo
    },
    clear(e) {
      if (e) {
        this[e] = ''
      } else {
        this.nickname = ''
        this.password = ''
      }
    },
    async login({ usernumber, password, code, nickname }) {
      if (usernumber && password) {
        const registe = await axiosGet(ROUTER.register, {
          phone: usernumber,
          password,
          captcha: code,
          nickname
        })
        const res = await axiosGet(ROUTER.activateInit, { nickname })
        if (res.code === 200 && registe.code === 200) {
          const result = await axiosGet(ROUTER.login, {
            phone: usernumber,
            password
          })
          if (result.account && result.profile) {
            this.icon = 'iconfont icon-duoxuan'
            this.$refs.warn.show(PASSORD_SUC)
            const t = this
            const res = await getLoginStatus()
            this.$store.commit('updateloginStatus', res)
            setTimeout(() => {
              t.$router.push('/')
            }, 2000)
          }
        } else {
          this.icon = 'iconfont icon-cha'
          this.$refs.warn.show(REGISTER_FILURE)
        }
      }
    }
  },
  components: {
    MeWarn,
    MeNavbar
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
}
.p {
  padding: 0.25rem;

  &-number {
    padding-bottom: 2rem;
    margin-top: 1.125rem;
    height: 0.625rem;
    font-size: 0.45rem;

    & .inp {
      padding: 0 0.25rem;
      padding-bottom: 0.25rem;
      font-size: 0.45rem;
      margin-bottom: 0.5rem;
      border-bottom: 1px solid #e6e6e6;
      width: 100%;
      display: block;
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

.icon {
  position: absolute;
  right: 0.25rem;
  transform: translateY(-1.3rem);
  color: #999;
  margin-top: 0.2rem;
  font-size: 0.3rem;
}
</style>
