<script setup>
const props = defineProps({ color: String });
</script>

<template>
  <button class="btn" :class="props.color"><slot /></button>
</template>

<style scoped>
.btn:active {
  box-shadow: none;
  transform: translateY(5px);
}
.btn {
  text-transform: uppercase;
  text-decoration: dotted;
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
</style>
