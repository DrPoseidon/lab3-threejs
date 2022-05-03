<script setup>
  import IPhone13PM from './components/iPhone13PM.vue';
  import IPhone12P from './components/iPhone12P.vue';
  import IPhone5S from './components/iPhone5S.vue';
</script>

<template>
  <div class="app">
    <i-phone13-p-m class="object"/>
    <i-phone12-p class="object"/>
    <i-phone5-s class="object"/>
  </div>
</template>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }

  .app {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }
</style>
