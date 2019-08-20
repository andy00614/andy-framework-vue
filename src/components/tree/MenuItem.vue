<template>
  <li :class="styles.menuItem" :style="{marginLeft: '-23px'}"><slot></slot></li>
</template>

<style module="styles" lang="scss">
  .menuItem {
    margin-left: -23px;
    color: #777;
  }
</style>