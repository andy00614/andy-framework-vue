<template>
  <div>
    <div v-for="item of todos" :key="item.key" :style="{marginLeft: positionCount*30 + 'px' }">
      <div v-show="item.show" @click="showOrHidden(item)">
        <span :style="{cursor:'pointer'}">{{item.value}}</span>
        <template v-if="item.children && item.children.length > 0">
          <Digui :todos="item.children" :positionCount="positionCount+1" ></Digui>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Digui',
  props: {
    todos: {
      type: Array,
      default: []
    },
    positionCount: {
      type: Number,
      default: 0
    },
    methods: {
      showOrHidden:function(item) {
        console.log(item)
      }
    }
  },
}
</script>