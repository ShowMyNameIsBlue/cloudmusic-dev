<template>
  <div class="CloudSet">
    <cs-header @changeContent="change" class="c-header-container"></cs-header>
    <cs-main class="c-content-container" v-if="content"></cs-main>
    <cs-space class="c-content-container" v-if="!content"></cs-space>
  </div>
</template>

<script>
import CsHeader from './header'
import CsMain from './main'
import CsSpace from './space'
export default {
  name: 'CloudSet',
  data() {
    return {
      content: true
    }
  },
  components: {
    CsHeader,
    CsMain,
    CsSpace
  },
  methods: {
    change(id) {
      if (id === 1) {
        this.content = true
      } else if (id === 2) {
        this.content = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.CloudSet {
  width: 100%;
  height: 100%;
}
</style>
