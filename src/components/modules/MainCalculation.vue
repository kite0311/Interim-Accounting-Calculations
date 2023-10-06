<script setup>
import { ref } from 'vue';
import { useGenerateRandomString } from '../../composables/useGenerateRandomString';
import GenerateTables from './GenerateTables.vue';

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

  <div id="sec">
    <ul id="card_contents" v-if="show">
      <li id="card_list" v-for="item of idList">
        <span class="fa fa-code"></span>
        <p class="name">Name<input type="text" class="name" style="width: 70%" maxlength="10" v-model="nameRef" /></p>
        <!-- 確定ボタン入力後に発火<input type="number" class="count_items" placeholder=" 数値を入力して下さい" /> -->
        <p>Price<input type="number" class="price_input" v-model="priceRef" /></p>
        <!-- 一旦使用しない<button class="addContents" @click="addItem">+</button> -->
        <button class="deleteContents" @click="deleteItem">-</button>
      </li>
    </ul>
    <!--itemsオブジェクトが空になった時にも下記の文言を表示させる-->
    <h2 v-else></h2>
  </div>

  <ul v-if="idList.length">
    <li v-for="value in idList">{{ value }}</li>
  </ul>
</template>

<style scoped>
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
