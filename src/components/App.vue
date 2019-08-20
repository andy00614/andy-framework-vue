<template>
  <div :class="styles.container">
    <div :class="styles.title">{{msg}}</div>
    <table-select></table-select>
    <ref></ref>
    <table></table>
  </div>
</template>
<script>
import TableSelect from './TableSelect'
import Ref from './refandrefs/ref'
import Table from './table/table'

export default {
  components:{
    TableSelect,
    Ref,
    Table
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