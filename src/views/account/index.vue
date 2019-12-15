<template>
  <div class="account">
    <account-header class="c-header-container"></account-header>
    <div class="account-info c-content-container">
      <p class="account-content" v-show="islogin">
        登录网易云音乐<br />
        手机电脑多端同步，尽享海量品质音乐
        <el-button class="account-btn" @click="login">立即登录</el-button>
      </p>
      <div class="account-new-content" v-show="!islogin">
        <div class="detail">
          <img src="" alt="" />
          <div class="main">
            <span class="name">意思</span>
            <span class="level">lv7</span>
          </div>
        </div>
        <div class="info-list">
          <div class="info-list-item"><span></span><span>动态</span></div>
          <div class="info-list-item"><span></span><span>关注</span></div>
          <div class="info-list-item"><span></span><span>粉丝</span></div>
          <div class="info-list-item">
            <span class="iconfont icon-bi"></span><span>编辑资料</span>
          </div>
        </div>
      </div>

      <div class="account-tabbar">
        <div><i class="iconfont icon-youjian"></i>消息</div>
        <div><i class="iconfont icon-shoutidai"></i>商城</div>
        <div><i class="iconfont icon-menpiao"></i>演出</div>
        <div><i class="iconfont icon-gexingzhuangban"></i>个性装扮</div>
      </div>
    </div>
    <div class="account-menu">
      <div>
        <i class="iconfont icon-dingdan"><span>订单</span> </i
        ><i class="el-icon-arrow-right"></i>
      </div>
      <div>
        <i class="iconfont icon-danchuang_sheweishoujicailing_fufei_">
          <span>口袋彩铃</span></i
        ><i class="el-icon-arrow-right"></i>
      </div>
      <div>
        <i class="iconfont icon-shezhi1"> <span>设置</span></i
        ><i class="el-icon-arrow-right"></i>
      </div>
      <div>
        <i class="iconfont icon-yejian"> <span>夜间模式</span></i>
      </div>
      <div>
        <i class="iconfont icon-fenxiang"> <span>分享</span></i>
      </div>
      <div>
        <i class="iconfont icon-gantanhao"> <span>关于</span></i>
      </div>
    </div>
    <div class="custom-btn" ref="parent" @click="translate">
      <div class="bg" ref="bg"></div>
      <div class="btn" ref="btn"></div>
    </div>
  </div>
</template>
<script>
import AccountHeader from './header'
export default {
  data() {
    return {
      status: false,
      islogin: false
    }
  },
  name: 'account',
  components: {
    AccountHeader
  },
  methods: {
    login() {
      this.$router.push('/sigin')
    },
    translate() {
      if (!this.status) {
        this.$refs.btn.style.left = '0.6rem'
        this.$refs.bg.style.width = '100%'
        this.$refs.bg.style.background = '#409eff'
        this.status = true
      } else {
        this.$refs.btn.style.left = '0'
        this.$refs.bg.style.width = '0%'
        this.$refs.bg.style.background = '#fff'
        this.status = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@assets/scss/mixins';
.account {
  &-info {
    padding: 1.25rem 0.4rem 0;
  }
  &-content {
    width: 100%;
    height: 3.5rem;
    text-align: center;
    padding: 0.3rem 0 0 0;
    line-height: 0.5rem;
    font-size: 0.4rem;
    color: #000;
  }
  &-new-content {
    .detail {
      @include flex-center();
      justify-content: flex-start;
      margin-left: 0.2rem;
      img {
        display: inline-block;
        height: 60px;
        width: 60px;
        background: #000;
        border-radius: 50%;
      }
      .main {
        text-align: center;
        width: 1.5rem;
        height: 1.5rem;

        @include flex-center(column);
        .name {
          line-height: 0.7rem;
          font-size: 0.4rem;
        }
        .level {
          display: inline-block;
          height: 0.5rem;
          width: 1rem;
          line-height: 0.5rem;
          border: 1px solid #eee;
          border-radius: 0.3rem;
          background: #eee;
        }
      }
    }
    .info-list {
      margin-top: 0.5rem;
      @include flex-between();
      padding: 0 0.3rem;
      &-item {
        // width: 1.8rem;
        // padding-right: 1rem;
        height: 1.2rem;
        text-align: center;
        font-size: 0.3rem;
        @include flex-center(column);
        border-right: 1px solid #e3e3e3;
        span:first-child {
          font-size: 0.45rem;
          padding: 0.125rem;
        }
        &:last-child {
          border: none;
        }
      }
    }
  }
  &-btn {
    margin-top: 0.8rem;
    width: 100%;
    border-radius: 0.5rem;
    color: #000;
    letter-spacing: 1px;
  }
  &-tabbar {
    position: relative;
    height: 2rem;
    padding: 0 0.3rem;
    @include flex-between();
    text-align: center;
    .iconfont {
      color: red;
      font-size: 0.6rem;
      line-height: 1rem;
    }
    div {
      @include flex-center(column);
      color: #000;
    }
    &::after {
      position: absolute;
      content: ' ';
      width: 100%;
      background: #ddd;
      height: 0.05rem;
      top: 2.25rem;
      left: 0;
    }
  }
  &-menu {
    margin-top: 0.4rem;
    padding: 0 0.4rem;
    div {
      @include flex-between();
      width: 100%;
      height: 1.3rem;
      i {
        font-size: 0.5rem;
      }
      span {
        display: inline-block;
        text-indent: 0.35rem;
        font-size: 0.35rem;
      }
    }
  }
}
.custom-btn {
  position: relative;
  height: 0.65rem;
  width: 1.2rem;
  top: -3.5rem;
  left: 7.8rem;
  border-radius: 0.3rem;
  border: 1px solid #ddd;
  overflow: hidden;
  .bg {
    position: absolute;
    height: 100%;
    width: 0;
    transition: all 0.3s;
  }
  & .btn {
    position: absolute;
    height: 0.6rem;
    width: 0.6rem;
    border-radius: 50%;
    background: #eee;
    box-shadow: 0 1px #aaa;
    left: 0;
    transition: all 0.3s;
  }
}
</style>
