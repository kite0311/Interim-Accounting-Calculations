<script setup>
import { ref } from 'vue';
import IncrementButton from './atoms/btn/counter/CounterIncrementButton.vue';
import DecrementButton from './atoms/btn/counter/CounterDecrementButton.vue';
import { useCounter } from '../../composables/useCounter';

const { increment, decrement } = useCounter();

let result = ref(0);

const items = ref([
  { name: 'A', price: 100, total: ref(0) },
  { name: 'B', price: 200, total: ref(0) },
  { name: 'C', price: 90, total: ref(0) }
]);

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
    totalResult += item.price * item.total;
  }
  result.value = totalResult;
};
</script>

<template>
  <div class="items">
    <ul class="itemForm">
      <li v-for="(item, index) in items" :key="index">
        <div class="content">
          <span class="item name">{{ item.name }}</span>
          <span class="item price">{{ item.price }}</span>
          <IncrementButton @increment-click="incrementCounter(item)"></IncrementButton>
          <span class="total"> {{ item.total }} </span>
          <DecrementButton @decrement-click="decrementCounter(item)"></DecrementButton>
        </div>
      </li>
    </ul>
  </div>
  <h1>SUM：{{ result }}</h1>
</template>

<style scoped>
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
