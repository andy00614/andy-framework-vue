<template>
  <div>
    <slot-todo :filteredTodos="todos" #todo="{todo}">
      <span v-if="todo.isComplete">✓</span>
      <span>{{todo.text}}</span>
    </slot-todo>
  </div>
</template>

<script>
import slotTodo from './slotTodo'
export default {
  components: {
    slotTodo
  },
  data() {
    return {
      todos: [
        {
          id:1,
          text: 'study',
          isComplete: false,
        },{
          id:2,
          text: 'sleep',
          isComplete: true,
        },{
          id:3,
          text: 'play',
          isComplete: true,
        }
      ]
    }
  }
}
</script>