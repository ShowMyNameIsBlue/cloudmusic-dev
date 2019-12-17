<template>
  <div class="video c-content-container">
    <video-header></video-header>
    <video-tabbar></video-tabbar>
  </div>
</template>

<script>
import VideoHeader from './header'
import VideoTabbar from './tabbar'
export default {
  name: 'videos',
  components: {
    VideoHeader,
    VideoTabbar
  }
}
</script>
