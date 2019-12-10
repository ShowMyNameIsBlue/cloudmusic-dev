<template>
  <div class="home">
    <home-header class="c-header-container"></home-header>
    <div class="c-content-container">
      <me-scroll>
        <div>
          <home-banner> </home-banner>
          <home-tarbar></home-tarbar>
          <home-recommend></home-recommend>
          <home-new></home-new>
          <div class="test"></div>
        </div>
      </me-scroll>
    </div>
  </div>
</template>

<script>
import HomeHeader from './header'
import HomeBanner from './banner'
import MeScroll from '@comp/scroll'
import HomeTarbar from './tarbar'
import HomeRecommend from './recommend'
import HomeNew from './new'

export default {
  name: 'home',
  data() {
    return {
      data: []
    }
  },
  components: {
    HomeHeader,
    MeScroll,
    HomeBanner,
    HomeTarbar,
    HomeRecommend,
    HomeNew
  }
}
</script>
<style lang="scss" scoped>
.home {
  font-size: 0.35rem;
  height: 100%;
}
.test {
  height: 600px;
  background: red;
}
</style>
