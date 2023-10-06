<script setup>
import { ref } from 'vue';
import { formValidator } from '../../composables/formValidatior';

const { isValidValue } = formValidator();
const tableValue = ref(0);
const emit = defineEmits(['add-table-value']);

const addTable = () => {
  if (isValidValue(tableValue.value)) {
    console.log('メソッド実行' + tableValue.value);
    emit('add-table-value', tableValue.value);
  } else {
    window.alert('12以下の数値を入力してください');
  }
};
//TODO フォームの入力制限
</script>

<template>
  <div class="addTableForm">
    <p>テーブル数を入力してください</p>
    <input
      type="text"
      class="countTable"
      style="width: 50px; height: 50px"
      pattern="^[a-zA-Z0-9]+$"
      min="0"
      max="12"
      required
      v-model="tableValue"
    />
  </div>
  <button class="btn confirmButton" @click="addTable">confirm</button>
</template>

<style scoped>
.addTableForm {
  display: block;
  text-align: center;
}
.countTable {
  border-radius: 20%;
  font-size: 24px;
  font-weight: 700;
  text-align: center;
}

.confirmButton {
  text-transform: uppercase;
  text-decoration: dotted;
  box-shadow: 0 5px 0 #ec9a00;
  margin: 30px;
  color: white;
  width: 130px;
  height: 42px;
  border-radius: 3px;
  border: none;
  background-color: #ffa500;
  display: block;
}
</style>
