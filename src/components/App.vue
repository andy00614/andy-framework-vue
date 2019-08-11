<template>
  <div :class="styles.container">
    <div :class="styles.title">{{msg}}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: 'Hello Vue'
    }
  }
}
</script>

<style module="styles" lang="scss">
  .container {
    .title {
      color: red;
    }
  }

</style>