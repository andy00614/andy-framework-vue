<template>
  <div>
    <div @click="changeVisible">
      <slot name="title" ></slot>
    </div>
    <div v-show="isVisible" :style="{marginLeft: '20px'}">
      <slot name="subMenu"></slot>
    </div>
  </div>  
</template>

<script>
export default {
 data() {
   return {
    isVisible: true
   }
  },
  methods: {
    changeVisible() {
      console.log(this.isVisible)
      this.isVisible = !this.isVisible
    }
  }
}
</script>

