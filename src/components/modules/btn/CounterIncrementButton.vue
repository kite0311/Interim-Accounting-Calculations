<script setup>
import BaseButton from './BaseButton.vue';
const emit = defineEmits(['increment-click']);
</script>

<template>
  <BaseButton color="red" @on-click="emit('increment-click')">+</BaseButton>
</template>
