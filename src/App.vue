<script setup>
import Hedaer from './components/modules/TheHeader.vue';
import Footer from './components/modules/TheFooter.vue';
import MainCalculate from './components/modules/MainCalculate.vue';
</script>

<template>
  <div class="wrap">
    <Hedaer />
    <MainCalculate></MainCalculate>
    <Footer />
  </div>
</template>

<style scoped>
.wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 350px;
  margin: 0 auto;
  font-family: sans-serif;
}

.main {
  flex: 1;
  width: 100%;
}
</style>
