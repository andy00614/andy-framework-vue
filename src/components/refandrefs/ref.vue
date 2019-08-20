<template>
  <div>
    <input-container ref="usernameInput"></input-container>
    <button @click="focusInput">focus</button>
  </div>
</template>

<script>
import InputContainer from './input-container'
export default {
  name: 'ref',
  components: {
    InputContainer
  },
  methods: {
    focusInput() {
      const input = this.$refs.usernameInput.$refs.input
      input.focus()
    }
  }
}
</script>