<template>
  <div class="play">
    <img class="bg-blur" :src="imgUrl" alt="" />
    <div class="play-album">
      <img class="coverpic" :src="imgUrl" alt="" />
    </div>
    <div class="play-options">
      <div class="play-options-item">
        <i class="iconfont icon-shoucang"></i>
        <i class="iconfont icon-xiazai"></i>
        <i class="iconfont icon-danchuang_sheweishoujicailing_fufei_"> </i>
        <i class="iconfont icon-c_message"><span></span></i>
        <i class="iconfont icon-msnui-more"></i>
      </div>
    </div>
    <div class="play-audio">
      <div class="lineNode">
        <div class="lefttime">00:00</div>
        <span class="progressline">
          <span class="progressline-wrapper">
            <span class="point"></span>
          </span>
        </span>
        <div class="righttime">1:00</div>
      </div>
      <div class="optionNode">
        <div class="playtype iconfont icon-gengduo"></div>
        <div class="prev iconfont icon-shangyishou"></div>
        <div class="playnow iconfont icon-bofang"></div>
        <div class="next iconfont icon-xiayishou"></div>
        <div class="alist iconfont icon-bofangliebiao"></div>
      </div>
    </div>
  </div>
</template>
<script>
// import { ROUTER } from './config'
// import { axiosGet } from '@assets/js/query'
export default {
  name: 'SongPlay',
  data() {
    return {
      imgUrl: ''
    }
  },
  created() {
    this.init()
  },
  methods: {
    async init() {
      const { coverImg } = this.getData()
      // const { id } = this.$route.params
      this.imgUrl = coverImg
      // const data = await axiosGet(ROUTER.song, { id })
      // const res = await axiosGet(ROUTER.songDetail, { ids: id })
      // console.log(res)
    },
    getData() {
      const { coverImg } = this.$route.query
      return { coverImg }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@assets/scss/mixins';
.play {
  width: 100%;
  height: 100%;
  padding-top: 1.25rem;
  .bg-blur {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    background: {
      position: center;
      size: 100%;
      repeat: no-repeat;
    }
    filter: blur(1.2rem);
  }
  &-album {
    position: relative;
    height: 6.375rem;
    width: 6.375rem;
    border-radius: 50%;
    padding: 0.5rem;
    border: 1px dashed #aaa;
    margin: 1.5rem auto 1.5rem;
    .coverpic {
      display: block;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      // border: 0.025rem solid red;
    }
  }
  &-options {
    position: relative;
    width: 100%;
    &-item {
      @include flex-between();
      justify-content: space-around;
      .iconfont {
        color: #eee;
        font-size: 0.6rem;
        &:nth-child(2) {
          font-size: 0.8rem;
        }
        &:nth-child(3) {
          font-size: 0.7rem;
        }
      }
    }
  }
  &-audio {
    position: relative;
    height: 3.5rem;
    padding: 0.5rem;
    @include flex-center(column);
    .lineNode {
      width: 100%;
      height: 100%;
      color: #000;
      @include flex-between();
      .progressline {
        display: block;
        width: 80%;
        height: 0.05rem;
        background: #fff;
        &-wrapper {
          position: relative;
          display: block;
          width: 30%;
          height: 0.1rem;
          background: #aaa;
          border-radius: 0.1rem;
          top: -0.03rem;
          .point {
            position: absolute;
            width: 0.3rem;
            height: 0.3rem;
            display: block;
            border-radius: 50%;
            top: -0.1rem;
            background: #aaa;
            left: 100%;
          }
        }
      }
    }
    .lefttime,
    .righttime {
      color: #eee;
    }
    .optionNode {
      width: 100%;
      @include flex-between();
      div {
        color: #eee;
        font-size: 0.5rem;
        &:nth-child(3) {
          font-size: 1rem;
        }
      }
    }
  }
}
</style>
