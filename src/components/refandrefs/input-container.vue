<template>
  <input type="text" v-model="inputValue" ref="input">
</template>

<script>
export default {
  name: 'inputContainer',
  data() {
    return {
      inputValue: ''
    }
  }
}
</script>