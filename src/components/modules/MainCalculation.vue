<script setup>
import { ref } from 'vue';
import { useGenerateRandomString } from '../../composables/useGenerateRandomString';
import TableCreate from './TableCreate.vue';
import TableConfirmButton from './btn/TableConfirmButton.vue';

const { generateId } = useGenerateRandomString();
const name = ref(['']);
const price = ref(['']);

const items = {
  // item1: {
  //   id: 1,
  //   name: 'first',
  //   price: 100,
  //   count: 10
};

const tableValue = ref(0);
const idList = ref([]);
const show = ref(false);

const addTable = (value) => {
  tableValue.value = value;
  show.value = true;
  for (let i = 1; i <= tableValue.value; i++) {
    const id = generateId();
    idList.value.push({ id: id });
  }
};

const setItems = () => {};
</script>

<template>
  <TableCreate @add-table-value="addTable" />
  <p>子コンポーネントから受け取った値: {{ tableValue }}</p>
  <div class="items">
    <ul v-if="show" class="itemForm">
      <p>品名と価格を入力してください</p>
      <li v-for="(item, index) of idList">
        <input
          type="text"
          class="item name"
          style="width: 60px"
          :placeholder="'品名 ' + (index + 1)"
          v-model="name[index]"
        />
        <input
          type="text"
          class="item price"
          style="width: 200px"
          :placeholder="'価格 ' + (index + 1)"
          v-model="price[index]"
        />
      </li>
      <div class="confirmButton">
        <TableConfirmButton color="orange" @table-confirm-click="confirmTable(2)">confirm</TableConfirmButton>
      </div>
      <p>{{ name }}: {{ price }}</p>
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

.confirmButton {
  display: block;
  margin: 0 50px 0 50px;
}

.addContents {
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

.deleteContents {
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
