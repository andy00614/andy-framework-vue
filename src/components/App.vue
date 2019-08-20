<template>
  <div :class="styles.container">
    <!-- <div :class="styles.title">{{msg}}1</div>
    <table-select></table-select>
    <ref></ref>
    <table></table> -->
    <Slider></Slider>
  </div>
</template>
<script>
import TableSelect from './TableSelect'
import Ref from './refandrefs/ref'
import Table from './table/table'
import Slider from './Slider/slider'

export default {
  components:{
    TableSelect,
    Ref,
    Table,
    Slider
  },
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