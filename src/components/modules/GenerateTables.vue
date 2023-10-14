<script setup>
import { ref } from 'vue';
import { formValidator } from '../../composables/formValidatior';
import ButtonBase from './ButtonBase.vue';

const { isValidValue } = formValidator();
const tableValue = ref(0);
const inactive = ref(false);
const emit = defineEmits(['add-table-value']);

const addTable = () => {
  const maxlength = 20;
  const minlength = 0;
  inactive.value = !inactive.value;
  if (isValidValue(tableValue.value, maxlength, minlength)) {
    emit('add-table-value', tableValue.value);
  } else {
    window.alert(maxlength + '以下の数値を入力してください');
  }
};
//TODO フォームの入力制限
</script>

<template>
  <div class="addTableForm" v-bind:class="{ inactive: inactive }">
    <p>テーブル数を入力してください</p>
    <input
      type="text"
      class="countTable"
      style="width: 50px; height: 50px"
      pattern="^[a-zA-Z0-9]+$"
      required
      v-model="tableValue"
    />
    <div class="confirmButton">
      <ButtonBase color="orange" @click="addTable">confirm</ButtonBase>
    </div>
  </div>
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
  margin: 20px;
}
.inactive {
  display: none;
}
</style>
