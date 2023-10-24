<script setup>
import Hedaer from './components/modules/TheHeader.vue';
import Footer from './components/modules/TheFooter.vue';
import TableInput from './components/modules/TableInput.vue';
import CountNumber from './components/modules/CountNumber.vue';
</script>

<template>
  <div class="wrap">
    <Hedaer />
    <TableInput></TableInput>
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
