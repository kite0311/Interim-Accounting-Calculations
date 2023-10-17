<script setup>
import BaseButton from './BaseButton.vue';
const emit = defineEmits(['decrement-click']);
</script>

<template>
  <BaseButton color="blue" @on-click="emit('decrement-click')">-</BaseButton>
</template>
