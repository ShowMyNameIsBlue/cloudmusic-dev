<template>
  <div class="phone">
    <me-navbar class="header g-header-container" title="重设密码">
      <i slot="left" class="el-icon-arrow-left" @click="backs"></i>
    </me-navbar>
    <div class="p">
      <p class="p-notice">+86 {{ userInfo.usernumber }}</p>
      <div class="p-number">
        <input
          placeholder="设置登录密码，不少于6位"
          type="password"
          v-model="password"
        />
        <i class="iconfont icon-cha icon" v-show="status" @click="clear"></i>
      </div>
      <el-button
        class="p-btn"
        :class="{ p_btn_active: status }"
        @click.native="next"
        >下一步</el-button
      >
    </div>
    <me-warn ref="warn" icon="iconfont icon-cha"></me-warn>
  </div>
</template>
<script>
import MeNavbar from '@comp/navbar'
import MeWarn from '@comp/warn'
import { PASSORD_WARN } from '../config'
// import { axiosGet } from '@assets/js/query'
export default {
  name: 'PStep5',
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
  watch: {
    password() {
      this.password ? (this.status = true) : (this.status = false)
    }
  },
  methods: {
    next() {
      if (!this.password) return
      if (this.password.length < 6) {
        this.$refs.warn.show(PASSORD_WARN)
      } else {
        this.$emit('next5', {
          id: 2,
          password: this.password,
          isRegister: true
        })
      }
      this.clear()
    },
    backs() {
      this.$emit('back5', { id: 3 })
      this.clear()
    },
    clear() {
      this.password = ''
    },
    updateUserInfo(userInfo) {
      if (JSON.stringify(userInfo) !== '{}') this.userInfo = userInfo
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
  &-notice {
    margin-top: 1.5rem;
    color: #000;
    font-size: 0.45rem;
    border-bottom: 1px solid #e6e6e6;
    padding-bottom: 0.25rem;
  }

  &-number {
    margin-top: 1.125rem;
    height: 0.625rem;
    font-size: 0.45rem;
    padding-bottom: 1rem;
    & input {
      padding: 0.25rem 0.25rem;
      font-size: 0.45rem;
      width: 100%;
      border-bottom: 1px solid #e6e6e6;
    }
  }
  &-btn {
    margin-top: 1rem;
    width: 100%;
    height: 0.95rem;
    border-radius: 0.425rem;
    background: #fbcbc7;
    border: none;
    color: #eee;
  }
  &_btn_active {
    background: $theme;
    color: #fff;
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
