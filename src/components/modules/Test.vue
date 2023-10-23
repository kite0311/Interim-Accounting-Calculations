<script setup>
import { random } from 'nanoid';
import { ref, onBeforeMount } from 'vue';
const Start = ref(0);

onBeforeMount(() => {
  Start.value = 10 * 3;
  console.log(Start);
});
</script>
<template>
  <div>{{ Start }}</div>
</template>
