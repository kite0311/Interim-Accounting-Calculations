<script setup>
import { ref, onBeforeMount } from 'vue';

const items = ref([]);
const price = ref([]);
const numberOfTable = 20;

onBeforeMount(() => {
  for (let i = 1; i <= numberOfTable; i++) {
    items.value.push({ name: 'Table' + i, price: '', total: ref(0) });
  }
  console.log(items.value);
});
</script>
<template>
  <div class="items">
    <ul class="itemForm">
      <p>Add_Message</p>
      <li v-for="(item, index) in items" :key="index">
        <label class="itmeNumber">{{ 'No.' + index }}</label>
        <input type="text" class="item price" style="width: 200px" :placeholder="'Price '" v-model="price[index]" />
      </li>
    </ul>
  </div>
</template>

<style scoped>
.items {
  display: flex;
  text-align: center;
  background-color: rgb(206, 206, 206);
  border-radius: 20px;
  box-shadow: 1px 1px 1px 2px inset;
}

.itemForm {
  list-style: none;
  padding: 10px 20px;
  text-align: center;
}

.itmeNumber {
  float: left;
  margin: 5px;
}

.item {
  border-radius: 50px 50px;
  margin: 4px;
  padding: 4px;
  float: right;
}
</style>
