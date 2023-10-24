<script setup>
import { ref, onBeforeMount, watch } from 'vue';
import IncrementButton from './atoms/btn/counter/CounterIncrementButton.vue';
import DecrementButton from './atoms/btn/counter/CounterDecrementButton.vue';
import { useCounter } from '../../composables/useCounter';

const { increment, decrement } = useCounter();
const items = ref([]);
const numberOfTable = 20;

let result = ref(0);

onBeforeMount(() => {
  for (let i = 1; i <= numberOfTable; i++) {
    items.value.push({ name: 'Item:' + i, price: ref(0), total: ref(0) });
  }
});

//＋ボタン押下時
const incrementCounter = (item) => {
  increment(item);
  setResult();
};

//―ボタン押下時
const decrementCounter = (item) => {
  decrement(item);
  setResult();
};

//合計値を格納
const setResult = () => {
  let totalResult = 0;
  for (const item of items.value) {
    // console.log(item);
    // console.log(price);
    totalResult += item.price * item.total;
  }
  result.value = totalResult;
};
</script>
<template>
  <div class="input-table-wrapper">
    <ul class="input-table-list">
      <p>Add_Message</p>
      <li v-for="(item, index) in items" :key="index">
        <div class="input-wrapper">
          <span class="span-content">{{ item.name }}</span>
          <input
            type="text"
            class="input-price-content"
            style="width: 200px"
            :placeholder="'Price'"
            v-model="item.price"
          />
          <DecrementButton @decrement-click="decrementCounter(item)"></DecrementButton>
          <span class="total"> {{ item.total }} </span>
          <IncrementButton @increment-click="incrementCounter(item)"></IncrementButton>
        </div>
      </li>
    </ul>
  </div>
  <h1>SUM：{{ result }}</h1>
</template>

<style scoped>
.input-table-wrapper {
  display: flex;
  text-align: center;
  background-color: rgb(206, 206, 206);
  border-radius: 20px;
  box-shadow: 1px 1px 1px 2px inset;
}

.input-table-list {
  list-style: none;
  padding: 15px 20px;
}

.input-wrapper {
  margin: 8px 0 8px 0;
  display: flexbox;
}

.span-content {
  margin-right: 10px;
  padding: 4px;
}

.input-price-content {
  border-radius: 50px 50px;
  margin: 2px;
  padding: 4px;
}

.items {
  display: flex;
  text-align: center;
  background-color: rgb(206, 206, 206);
  border-radius: 20px;
  box-shadow: 1px 1px 1px 2px inset;
}

.item {
  border-radius: 50px 50px;
  margin: 4px;
  padding: 4px;
}

.itemForm {
  list-style: none;
  padding: 10px 20px;
  text-align: center;
}

.content {
  background-color: aquamarine;
  border: 5px solid skyblue;
  margin: 20px 0 20px 0;
}
</style>
