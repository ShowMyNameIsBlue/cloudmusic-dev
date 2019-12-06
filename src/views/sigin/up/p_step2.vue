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
      <router-link to="/" class="p-new"
        >重设密码 <i class="el-icon-arrow-right"></i
      ></router-link>
    </div>
  </div>
</template>

<script>
import MeNavbar from '@comp/navbar'
export default {
  name: 'PStep2',
  components: {
    MeNavbar
  },
  data() {
    return {
      status: false,
      password: ''
    }
  },
  methods: {
    backs() {
      this.$emit('back2', 2)
      this.clear()
    },
    next() {
      const r = /^1\d{10}$/g
      if (!this.password) return
      if (r.test(this.password)) {
        this.$emit('isOK_1')
        this.$router.push('/')
      } else {
        if (this.password.length === 11) {
          this.$refs.warn.show(`电话号码格式错误`)
        } else {
          this.$refs.warn.show(`应输入11位的数字`)
        }
      }
    },
    clear() {
      this.password = ''
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
