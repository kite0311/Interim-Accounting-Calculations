<script setup>
import BaseButton from './BaseButton.vue';
const emit = defineEmits(['table-confirm-click']);
</script>

<template>
  <BaseButton color="orange" @on-click="emit('table-confirm-click')">CONFIRM</BaseButton>
</template>
