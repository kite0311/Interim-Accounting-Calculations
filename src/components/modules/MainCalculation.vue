<script setup>
import { ref } from 'vue';
import { useGenerateRandomString } from '../../composables/useGenerateRandomString';
import GenerateTables from './GenerateTables.vue';
import ButtonBase from './ButtonBase.vue';
const { generateId } = useGenerateRandomString();
const tableValue = ref(0);

const idList = ref([]);
const show = ref(false);
const nameRef = ref([]);
const priceRef = ref([]);

const items = {
  // item1: {
  //   id: 1,
  //   name: 'first',
  //   price: 100,
  //   count: 10
};

const addTable = (value) => {
  tableValue.value = value;
  show.value = true;
  for (let i = 1; i <= tableValue.value; i++) {
    const id = generateId();
    items['item' + i] = { id: id };
    localStorage.items = JSON.stringify(items);
    idList.value.push({ id: id });
  }
};

const confirmTable = (value) => {};

//TODO idを受け取るかチェックボックスを使って、後ろから削除だけでなく任意のカードを消せるようにする。
//TODO 現状、削除ボタンとストレージの削除のタイミングがずれているため調整する。
//TODO 削除ボタンを最大まで押下するとカウンタが0になるため制御する。
const deleteItem = () => {
  idList.value.pop(1);
  delete items['item' + cardCounter];
  localStorage.items = JSON.stringify(items);
  cardCounter--;
  console.log(items);
};
</script>

<template>
  <GenerateTables @add-table-value="addTable" />
  <p>子コンポーネントから受け取った値: {{ tableValue }}</p>
  <p>{{ items.item }}</p>

  <div class="items">
    <ul v-if="show">
      <p>品名と価格を入力してください</p>
      <li v-for="item of idList">
        <input type="text" class="item name" style="width: 60px" placeholder="品名" />
        <input type="text" class="item price" style="width: 200px" placeholder="価格" />
      </li>
      <div><ButtonBase color="orange" @click="confirmTable">confirm</ButtonBase></div>
    </ul>
  </div>

  <!-- <div id="sec">
    <ul id="card_contents" v-if="show">
      <li id="card_list" v-for="item of idList">
        <span class="fa fa-code"></span>
        <p class="name">Name<input type="text" class="name" style="width: 70%" maxlength="10" v-model="nameRef" /></p>
        <p>Price<input type="number" class="price_input" v-model="priceRef" /></p>
        <button class="deleteContents" @click="deleteItem">-</button>
      </li>
    </ul>
  </div> -->

  <!-- <ul v-if="idList.length">
    <li v-for="value in idList">{{ value }}</li>
  </ul> -->
</template>

<style scoped>
.items {
  display: flex;
  text-align: center;
}

.item {
  border-radius: 50px 50px;
  margin: 4px;
  padding: 4px;
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

/**カード内フォームのcss */
.price_input {
  width: 65%;
  height: 32px;
  font-size: 20px;
  text-align: center;
}
</style>
