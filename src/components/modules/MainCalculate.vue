<script setup>
import { ref, onBeforeMount, watch } from 'vue';
import IncrementButton from './atoms/btn/counter/CounterIncrementButton.vue';
import DecrementButton from './atoms/btn/counter/CounterDecrementButton.vue';
import { useCounter } from '../../composables/useCounter';
import { usePriceTotal } from '../../composables/usePriceTotal';
const { increment, decrement } = useCounter();

const items = ref([]);
const numberOfTable = 15;
const { total } = usePriceTotal(items);

onBeforeMount(() => {
  for (let i = 1; i <= numberOfTable; i++) {
    items.value.push({ name: 'Item:' + i, price: ref(0), counter: ref(0) });
    localStorage.items = JSON.stringify(items.value);
  }
});

//＋ボタン押下時
const handleIncrement = (item) => {
  increment(item);
  console.log(item.name + 'IncrementButtonClicked');
};

//―ボタン押下時
const handleDecrement = (item) => {
  decrement(item);
  console.log(item.name + 'DecrementButtonClicked');
};
</script>
<template>
  <div class="input-table-wrapper">
    <ul class="input-table-list">
      <p>数字を入力してください。</p>
      <li v-for="(item, index) in items" :key="index">
        <div class="input-wrapper">
          <span class="item-name-content">{{ item.name }}</span>
          <input type="text" class="input-price-content" style="width: 100px" v-model="item.price" />
          <div class="counter-button">
            <DecrementButton @on-decrement-click="handleDecrement(item)" :disabled="!item.total"></DecrementButton>
            <span class="counter-value">{{ item.counter }}</span>
            <IncrementButton @on-increment-click="handleIncrement(item)" :disabled="!item.price"></IncrementButton>
          </div>
        </div>
      </li>
    </ul>
  </div>
  <h1>合計:{{ total }}</h1>
</template>

<style>
@import 'assets/css/mainCalculate.css';
</style>
