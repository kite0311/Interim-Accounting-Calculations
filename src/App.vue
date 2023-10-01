<script setup>
import TheHedaer from '../src/components/TheHeader.vue';
import TheFooter from '../src/components/TheFooter.vue';
import MainCalcultaion from './components/MainCalculation.vue';
</script>

<template>
  <div class="wrap">
    <TheHedaer />
    <MainCalcultaion />
    <TheFooter />
  </div>
</template>

<style scoped>
.wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 950px;
  margin: 0 auto;
  font-family: sans-serif;
}

.main {
  flex: 1;
  width: 100%;
}
</style>
