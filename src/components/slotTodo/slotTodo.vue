<template>
  <div>
    <ul>
      <li 
        v-for="todo in filteredTodos"
        :key="todo.id"
      >
        <slot name="todo" :todo="todo">
          {{todo.text}}
        </slot>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    filteredTodos: {
      type: Array,
      default: []
    }
  }
}
</script>