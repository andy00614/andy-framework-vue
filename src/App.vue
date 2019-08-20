<template>
  <div :class="styles.root">
    <div :class="styles.sideBar">
      <sideBar></sideBar>
    </div>
    <div :class="styles.content">
      <slot-comp></slot-comp>
      <todo-container></todo-container>
      <!-- <Digui :todos="todos"></Digui> -->
      <Menu></Menu>
    </div>
  </div>
</template>


<script>
import sideBar from './sideBar/sideBar'
import slotComp from './components/slotComp'
import todoContainer from './components/slotTodo/todoContainer'
import Digui from './components/Digui'
import Menu from './components/tree/Menu'
export default {
  name: 'App',
  components: {
    sideBar,
    slotComp,
    todoContainer,
    Digui,
    Menu
  },
  methods: {
    changeItem(item) {
      console.log(item)
    }
  },
  data() {
    return {
      todos: [
        {
          key: '34df',
          value: '菜单1',
          show: true,
          children: [
            {
              key: '34d32f',
              value: '菜单1-1',
              show: true,
            },{
              key: '5d352f',
              value: '菜单1-2',
              show: true,
            }
          ]
        },{
          key: '3ff2f',
          value: '菜单2',
          show: true,
        },{
          key: '3f6hf2f',
          value: '菜单3',
          show: true,
        }
      ]
    }
  }
}
</script>

<style module="styles" lang="scss">
  .root {
    display: flex;
    height: 100vh;
    .sideBar {
      min-width: 20vw;
      margin-right: 1vw;
    }
    .content {
      flex-grow: 1;
    }
  }
</style>