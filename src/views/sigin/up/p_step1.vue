<template>
  <div class="phone">
    <me-navbar class="header g-header-container" title="手机号登录">
      <i slot="left" class="el-icon-arrow-left" @click="backs"></i>
    </me-navbar>
    <div class="p">
      <p class="p-notice">未注册手机号登录后将自动创建账号</p>
      <div class="p-number">
        <span>+86</span
        ><input placeholder="请输入手机号" type="number" v-model="usernumber" />
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
import { USERNUMBER_WARN, ROUTER } from '../config'
import { axiosGet } from '@assets/js/query'
export default {
  name: 'PStep1',
  components: {
    MeNavbar,
    MeWarn
  },
  data() {
    return {
      status: false,
      usernumber: ''
    }
  },
  created() {
    this.content = ` <div style="text-align: center;">
                   <i class="iconfont icon-cha"></i>
                  <span>${this.warn_msg}</span>
                  </div>`
  },
  watch: {
    usernumber() {
      this.usernumber ? (this.status = true) : (this.status = false)
    }
  },
  methods: {
    backs() {
      this.$router.back()
      this.clear()
    },
    async next() {
      const r = /^1\d{10}$/g
      if (!this.usernumber) return
      if (r.test(this.usernumber)) {
        const isSigin = await this.validte()
        if (!isSigin) {
          this.$emit('next1', { id: 2, usernumber: this.usernumber })
        } else this.$emit('next1', { id: 1, usernumber: this.usernumber })
        this.clear()
      } else {
        if (this.usernumber.length === 11) {
          this.$refs.warn.show(USERNUMBER_WARN.NUMBER)
        } else {
          this.$refs.warn.show(USERNUMBER_WARN.LENGTH)
        }
      }
    },
    clear() {
      this.usernumber = ''
    },
    async validte() {
      const result = await axiosGet(ROUTER.isSigin, { phone: this.usernumber })
      const { exist } = result
      if (exist === -1) return false
      return true
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
    color: #999;
    font-size: 0.4rem;
  }

  &-number {
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
