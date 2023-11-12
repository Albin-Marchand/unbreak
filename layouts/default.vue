<template>
  <div class="layout_wrapper">
    <div class="header"></div>
    <slot />
  </div>
</template>

<script setup></script>

<style>
.layout_wrapper {
}
.header {
  height: 100px;
  background-color: white;
}
</style>
