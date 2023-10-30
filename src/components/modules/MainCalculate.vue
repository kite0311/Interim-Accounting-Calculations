<script setup>
import { ref, onBeforeMount } from 'vue';
import IncrementButton from './atoms/btn/counter/CounterIncrementButton.vue';
import DecrementButton from './atoms/btn/counter/CounterDecrementButton.vue';
import { useCounter } from '../../composables/useCounter';
import { usePriceTotal } from '../../composables/usePriceTotal';
import { useGenerateId } from '../../composables/useGenerateId';
const { increment, decrement } = useCounter();
const { generateId } = useGenerateId();

const items = ref([]);
const numberOfTable = 15;
const { total } = usePriceTotal(items);

onBeforeMount(() => {
  for (let i = 1; i <= numberOfTable; i++) {
    items.value.push({ id: generateId(), name: 'Item:' + i, price: ref(0), counter: ref(0) });
  }
});
//＋ボタン押下時
const handleIncrement = (item) => {
  increment(item);
  console.info(item.name + ' IncrementButtonClicked');
  localStorage.items = JSON.stringify(items.value);
};

//―ボタン押下時
const handleDecrement = (item) => {
  decrement(item);
  console.info(item.name + ' DecrementButtonClicked');
  localStorage.items = JSON.stringify(items.value);
};
</script>
<template>
  <div class="input-table-wrapper">
    <ul class="input-table-list">
      <h2>合計:{{ total }}</h2>
      <span>数字を入力してください。</span>
      <li v-for="(item, index) in items" :key="index">
        <div class="input-wrapper">
          <span class="item-name-content">{{ item.name }}</span>
          <input type="text" class="input-price-content" style="width: 100px" v-model="item.price" />
          <div class="counter-button">
            <DecrementButton @on-decrement-click="handleDecrement(item)" :disabled="!item.counter"></DecrementButton>
            <span class="counter-value">{{ item.counter }}</span>
            <IncrementButton @on-increment-click="handleIncrement(item)" :disabled="!item.price"></IncrementButton>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style>
@import 'assets/css/mainCalculate.css';
</style>
