<script setup>
const props = defineProps({ counter: String });
const emit = defineEmits(['on-click']);

const onClick = (str) => {
  emit('on-click', str);
};
</script>

<template>
  <button class="btn" :class="props.counter" @click="onClick('click')"><slot /></button>
</template>

<style scoped>
.btn:active {
  box-shadow: none;
  transform: translateY(2px);
}
.btn {
  margin: 2px;
  color: white;
  width: 36px;
  height: 36px;
  border-radius: 18px;
  border: none;
}
</style>
