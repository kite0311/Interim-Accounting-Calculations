<script setup>
import { ref, onBeforeMount } from 'vue';
import IncrementButton from './atoms/btn/counter/CounterIncrementButton.vue';
import DecrementButton from './atoms/btn/counter/CounterDecrementButton.vue';
import { useCounter } from '../../composables/useCounter';

const { increment, decrement } = useCounter();

const items = ref([]);
const numberOfTable = 15;

onBeforeMount(() => {
  for (let i = 1; i <= numberOfTable; i++) {
    items.value.push({ name: 'Item:' + i, price: ref(0), total: ref(0) });
    localStorage.items = JSON.stringify(items.value);
  }
});

//＋ボタン押下時
const incrementCounter = (item) => {
  increment(item);
  setResult();
  console.log(item.name + 'IncrementButtonClicked');
};

//―ボタン押下時
const decrementCounter = (item) => {
  decrement(item);
  setResult();
  console.log(item.name + 'DecrementButtonClicked');
};

//合計値を格納
const result = ref(0);
const setResult = () => {
  let totalResult = 0;
  for (const item of items.value) {
    totalResult += item.price * item.total;
  }
  result.value = totalResult;
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
          <DecrementButton @decrement-click="decrementCounter(item)" :disabled="!item.total"></DecrementButton>
          <span class="total-content"> {{ item.total }} </span>
          <IncrementButton @increment-click="incrementCounter(item)" :disabled="!item.price"></IncrementButton>
        </div>
      </li>
    </ul>
  </div>
  <h1>合計:{{ result }}</h1>
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
  display: flex;
  margin: 2px;
}

.input-price-content {
  border-radius: 50px 50px;
  margin: 3px 20px;
  flex: 1;
  text-align: center;
  font-size: 150%;
}

.item-name-content {
  width: 50px;
  margin-right: 10px;
  padding: 4px;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.total-content {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: large;
}
</style>
