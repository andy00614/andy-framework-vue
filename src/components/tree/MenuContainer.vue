<template>
  <div>
    <div v-for="todo in todos" :key="todo.key">
      <slot name="MenuItem">{{todo.value}}</slot>
      <slot name="SubMenu" :todo="todo"></slot>
    </div>
  </div>
</template>

<script>
import MenuItem from ''
export default {
  name: 'MenuContainer',
  props: {
    todos: {
      type: Array,
      default: []
    }
  }
  
}
</script>