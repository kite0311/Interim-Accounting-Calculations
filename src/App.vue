<script setup>
import Hedaer from './components/modules/TheHeader.vue';
import Footer from './components/modules/TheFooter.vue';
import MainCalcultaion from './components/modules/MainCalculation.vue';
</script>

<template>
  <div class="wrap">
    <Hedaer />
    <MainCalcultaion />
    <Footer />
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
