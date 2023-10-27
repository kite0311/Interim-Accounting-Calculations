<script setup>
import BaseCounterButton from '../BaseCounterButton.vue';
const emit = defineEmits(['on-decrement-click']);
</script>

<template>
  <BaseCounterButton value-counter="decrement" @on-click-button="emit('on-decrement-click')">-</BaseCounterButton>
</template>

<style scoped>
.decrement {
  background-color: #5392f0;
  box-shadow: 0 2px 0 #2657a0d8;
}
</style>
