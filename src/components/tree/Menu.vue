<template>
  <div>
    <template v-for="todo in menuList" >
      <MenuItem
        v-if="!todo.children"
        :key="todo.id"
      >
        {{todo.value}}
      </MenuItem>
      <!-- ReSubMenu是一个递归组件 -->
      <ReSubMenu
        v-else
        :key="todo.id"
        :data="todo"
      ></ReSubMenu>
    </template>
  </div>
</template>

<script>
// import MenuContainer from './MenuContainer'
import ReSubMenu from './ReSubMenu'
import MenuItem from './MenuItem'
export default {
  components: {
    // MenuContainer,
    MenuItem,
    ReSubMenu
  },
  data() {
    return {
      menuList: [{
          value: '菜单1',
          children: [{
              value: '菜单1-1',
              children: [{
                  value:'菜单1-1-1'
              },{
                  value:'菜单1-1-2'
              },{
                  value:'菜单1-1-3'
              }]
          },{
              value: '菜单1-2',
                children: [{
                  value:'菜单1-2-1'
              },{
                  value:'菜单1-2-2'
              },{
                  value:'菜单1-2-3'
              }]
          },{
              value: '菜单1-3',
                children: [{
                  value:'菜单1-3-1'
              },{
                  value:'菜单1-3-2'
              },{
                  value:'菜单1-3-3',
                  children: [{
                      value:'菜单1-3-3-1'
                  },{
                      value:'菜单1-3-3-2'
                  },{
                      value:'菜单1-3-3-3'
                  }]
              }]
          }]
      },{
          value: '菜单2'
      },{
          value: '菜单3'
      }]
    }
  }
}
</script>