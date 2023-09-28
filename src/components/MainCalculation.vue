<script setup>
import { ref } from 'vue';

const summary = 1;
const summaryList = [1, 2, 3];

// const addForm = () => {
//   if (calculate.childElementCount != 10) {
//     const input = document.createElement('input');
//     input.setAttribute('type', 'text');
//     //TODO 数値のみを受け取るバリデーションを付与
//     input.setAttribute('maxLength', '10');
//     input.setAttribute('size', '5');
//     input.setAttribute('placeholder', '金額を入力');
//     input.setAttribute('name', 'price');
//     input.id = 'numInput';
//     calculate.appendChild(input);
//   }
// };
</script>

<template>
  <div class="box_input">
    <input type="text" class="price_input" v-model="priceRef" placeholder=" 金額を入力して下さい" />
    <button class="addForm" @click="addButton">+</button>
  </div>
  <div id="calculate"></div>
  <button class="delete" @click="deleteButton">-</button>
  <h2 id="summary">合計:{{ summary }}</h2>
</template>

<style scoped>
.box_input {
  margin-top: 20px;
}
.addForm {
  border: none;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  width: 60px;
  box-sizing: border-box;
  background: skyblue;
  color: white;
  text-decoration: none;
  text-align: center;
}

.delete {
  border: none;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  width: 60px;
  box-sizing: border-box;
  background: red;
  color: white;
  text-decoration: none;
  text-align: center;
}
</style>
