<template
  ><div class="phone">
    <me-navbar class="header g-header-container" title="网易邮箱账号登录">
      <i slot="left" class="el-icon-arrow-left" @click="backs"></i>
    </me-navbar>
    <div class="p">
      <div class="p-number">
        <input class="inp" placeholder="登录邮箱" type="text" v-model="email" />
        <i
          class="iconfont icon-cha icon"
          v-show="email"
          @click="clear('email')"
        ></i>
        <input
          class="inp"
          placeholder="密码"
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
import { PASSORD_ERR, ROUTER } from '../config'
export default {
  name: 'PStep4',
  data() {
    return {
      icon: '',
      email: '',
      password: ''
    }
  },
  methods: {
    next() {
      const t = /\w{6,}@163.com$/g
      if (!this.password || !this.email) return
      if (this.password.length < 6 || !t.test(this.email)) {
        this.icon = 'iconfont icon-cha'
        this.$refs.warn.show(PASSORD_ERR)
      } else {
        this.login({
          email: this.email,
          password: this.password
        })
      }
    },
    backs() {
      this.$router.back()
      this.clear()
    },

    clear(e) {
      if (e) {
        this[e] = ''
      } else {
        this.email = ''
        this.password = ''
      }
    },
    async login({ email, password }) {
      if (email && password) {
        const result = await axiosGet(ROUTER.emailLogin, {
          email,
          password
        })
        if (result.code === 200) this.$router.push('/')
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
