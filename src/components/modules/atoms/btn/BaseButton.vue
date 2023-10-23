<script setup>
const props = defineProps({ color: String });
const emit = defineEmits(['on-click']);

const onClick = (str) => {
  emit('on-click', str);
};
</script>

<template>
  <button class="btn" :class="props.color" @click="onClick('click')"><slot /></button>
</template>

<style scoped>
.btn:active {
  box-shadow: none;
  transform: translateY(5px);
}
.btn {
  text-transform: uppercase;
  margin: 30px;
  color: white;
  width: 130px;
  height: 42px;
  border-radius: 3px;
  border: none;
  display: block;
}

.orange {
  background-color: #ffa500;
  box-shadow: 0 5px 0 #ec9a00;
}

.blue {
  background-color: #5392f0;
  box-shadow: 0 5px 0 #3880ecd8;
}

.red {
  background-color: #ca5b5b;
  box-shadow: 0 5px 0 #ca5b5ba4;
}
</style>
