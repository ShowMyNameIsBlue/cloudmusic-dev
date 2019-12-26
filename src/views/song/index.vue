<template>
  <div class="song">
    <song-header class="c-header-container"></song-header>
    <song-play class="c-content-container"></song-play>
  </div>
</template>

<script>
import SongHeader from './header'
import SongPlay from './main'
export default {
  name: 'song',
  components: {
    SongHeader,
    SongPlay
  }
}
</script>

<style lang="scss" scoped>
.song {
  width: 100%;
  height: 100%;
}
</style>
