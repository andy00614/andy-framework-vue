<template>
  <div :class="styles.sideBar">
    sideBar
  </div>
</template>

<script>
import routerList from '../router/router'

export default {
  name: 'SideBar',
  data() {
    return {
      routerList
    }
  },
}
</script>

<style module="styles" lang="scss">
  .sideBar {

  }
</style>