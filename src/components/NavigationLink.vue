<template>
  <div>
    <div :class="styles.header">
      <slot name="header"></slot>
    </div>
    <div :class="styles.content">
      <slot name="content"></slot>
    </div>
    <div :class="styles.footer">
      <slot name="footer" :info="info"></slot>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: {
        name: 'ddu',
        age: 23,
      }
    }
  }
}
</script>

<style module="styles" lang="scss">
  .header {
    margin-top: 1vw;
    border: 1px solid red;
  }
  .content {
    margin-top: 1vw;
    border: 1px solid yellow;
  }
  .footer {
    margin-top: 1vw;
    border: 1px solid black;
  }
</style>