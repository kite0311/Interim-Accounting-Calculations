<script setup>
const props = defineProps({ valueCounter: String });
const emit = defineEmits(['on-click']);

const onClick = (str) => {
  emit('on-click', str);
};
</script>

<template>
  <button class="btn" :class="props.valueCounter" @click="onClick('click')"><slot /></button>
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
  height: 40px;
  border-radius: 20px;
  border: none;
  flex: 1;
}
</style>
