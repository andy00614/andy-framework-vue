<template>
  <SubMenu>
    <template #title>
      {{data.value}}
    </template>
    <template #subMenu>
      <template v-for="child in data.children">
        <MenuItem v-if="!child.children" :key="child.id">{{child.value}}</MenuItem>
        <ReSubMenu v-else :data="child" :key="child.id"></ReSubMenu>
      </template>
    </template>
  </SubMenu>
</template>

<script>
import SubMenu from './SubMenu'
import MenuItem from './MenuItem'
export default {
  name: 'ReSubMenu',
  components: {
    MenuItem,
    SubMenu
  },
  props: {
    data: {
      // type: Array,
      // default: () => []
    }
  }
}
</script>