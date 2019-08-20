<template>
  <div class="block">
    <el-slider
      v-model="value"
      show-input>
    </el-slider>
    <el-button>haha</el-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: 0
      }
    }
  }
</script>