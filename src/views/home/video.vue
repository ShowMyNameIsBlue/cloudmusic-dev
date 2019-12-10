<template>
  <div class="video">
    <div class="video-item">
      <div class="video-wrapper">
        <router-link class="video-main">
          <img class="img" src="" alt="" />
          <i class="paly iconfont"></i>
          <i class="count iconfont"></i>
          <i class="time iconfont"></i>
          <span class="title"></span>
        </router-link>
        <router-link class="video-author">
          <span></span>
        </router-link>
        <i class="zan iconfont"></i>
        <i class="msg iconfont"></i>
        <i class="more iconfont"></i>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeVideo'
}
</script>
<style lang="scss" scoped>
.video {
  padding: 0.5rem;
  font-size: 0.35rem;
  &-item {
    background: #ddd;
    height: 7.75rem;
  }

  &-wrapper {
    background: #fff;
    height: 7.5rem;
    position: relative;
  }

  &-main {
    border-radius: 0.25rem;
    position: relative;
    .img {
      display: block;
      width: 100%;
      height: 4.875rem;
    }
    .paly {
      position: absolute;
      top: 50%;
      left: 50%;
    }
    .count {
      position: absolute;
      left: 0;
      bottom: 1.275rem;
    }
    .time {
      position: absolute;
      right: 0;
      bottom: 1.275rem;
    }
    .title {
      position: absolute;
      left: 0;
      bottom: 0;
    }
  }
  &-author {
    display: inline-block;
    border-radius: 50%;
    width: 0.75rem;
    height: 0.75rem;
    position: absolute;
    top: 1.275rem;
    right: 0.8rem;
  }
  .zan {
    position: absolute;
    left: 0;
  }
  .msg {
    position: absolute;
    left: 2.25rem;
  }
  .more {
    position: absolute;
    right: 0;
  }
}
</style>
