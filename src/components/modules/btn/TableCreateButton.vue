<script setup>
import BaseButton from './BaseButton.vue';
const emit = defineEmits(['table-create-click']);
</script>

<template>
  <BaseButton color="orange" @on-click="emit('table-create-click')">CREATE</BaseButton>
</template>
