<script setup>
import BaseCounterButton from './BaseCounterButton.vue';
const emit = defineEmits(['decrement-click']);
</script>

<template>
  <BaseCounterButton counter="decrement" @on-click="emit('decrement-click')">-</BaseCounterButton>
</template>

<style scoped>
.decrement {
  background-color: #5392f0;
  box-shadow: 0 2px 0 #2657a0d8;
}
</style>
