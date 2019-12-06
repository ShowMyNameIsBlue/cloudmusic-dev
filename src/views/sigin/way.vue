<template>
  <div class="way">
    <div class="logo iconfont icon-wangyiyunyinle"></div>

    <el-button class="phone btn" round @click.native="validate('p')"
      >手机号登录</el-button
    >

    <el-button class="email btn" round @click.native="validate('m')"
      >邮箱登录</el-button
    >
    <el-checkbox v-model="checked">
      <span
        ><a href="#" class="rule"
          >同意《服务条款》《隐私政策》 《儿童隐私政策》</a
        ></span
      >
    </el-checkbox>
    <me-warn ref="warn"></me-warn>
  </div>
</template>

<script>
import MeWarn from '@comp/warn'

export default {
  name: 'SiginWay',
  data() {
    return {
      checked: false
    }
  },
  created() {
    this.content = '请先勾选同意《服务条款》《隐私政策》 《儿童隐私政策》'
  },
  components: {
    MeWarn
  },
  methods: {
    validate(way) {
      if (!this.checked) {
        this.$refs.warn.show(this.content)
      } else {
        way === 'p'
          ? this.$router.push('/sigin/phone')
          : this.$router.push('/sigin/eamil')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@assets/scss/mixins';
.way {
  text-align: center;
  width: 100%;
  height: 100%;
  background: $theme;
  padding-top: 3.75rem;
}
.logo {
  width: 1.875rem;
  height: 1.875rem;
  border-radius: 50%;
  color: $icon-color-default;
  margin: 0 auto;
  font-size: 1.0625rem;
  line-height: 1.875rem;
  background: #de4033;
  margin-bottom: 3.75rem;
}
.btn {
  margin: auto;
  display: block;
  margin-bottom: 0.425rem;
  width: 6.825rem;
  height: 1.175rem;
  letter-spacing: 0.025rem;
  font-weight: bold;
  font-size: $icon-font-size-sm;
  color: #ed4d44;

  &.email {
    color: #fff;
    background: $theme;
    margin-bottom: 1.875rem;
  }
}
.rule {
  color: #fff;
  font-size: $font-size-base;
}
</style>
