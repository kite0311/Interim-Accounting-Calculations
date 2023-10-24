<script setup>
import BaseCounterButton from '../BaseCounterButton.vue';
const emit = defineEmits(['increment-click']);
</script>

<template>
  <BaseCounterButton numeric-counter="increment" @on-click="emit('increment-click')">+</BaseCounterButton>
</template>

<style scoped>
.increment {
  background-color: #ca5b5b;
  box-shadow: 0 2px 0 #7a3737e0;
}
</style>
