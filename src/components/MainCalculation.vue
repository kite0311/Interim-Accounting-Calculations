<script setup>
import { ref } from 'vue';
import { useCalculate } from '../composables/useCalculate';
import { useGenerateRandomString } from '../composables/useGenerateRandomString';

const { generateId } = useGenerateRandomString();
const idList = ref([]);
const show = ref(false);
var cardCounter = 1;

const items = {
  // item1: {
  //   id: 1,
  //   name: 'first',
  //   price: 100,
  //   count: 10
};

const addItem = () => {
  const id = generateId();
  show.value = true;
  items['item' + cardCounter++] = { id: id };
  localStorage.items = JSON.stringify(items);
  idList.value.push({ id: id });
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
  <button class="addContents" @click="addItem">+</button>
  <button class="deleteContents" @click="deleteItem">-</button>
  <!--以下は後日置換予定-->
  <div id="sec">
    <ul id="card_contents" v-if="show && cardCounter >= 1">
      <li id="card_list" v-for="item of idList">
        <span class="fa fa-code"></span>
        <p class="name">name<input type="text" class="name" style="width: 70%" maxlength="10" /></p>
        <!-- 確定ボタン入力後に発火<input type="number" class="count_items" placeholder=" 数値を入力して下さい" /> -->
        <p>price<input type="number" class="price_input" v-model="priceRef" /></p>
      </li>
    </ul>
    <!--itemsオブジェクトが空になった時にも下記の文言を表示させる-->
    <h2 v-else-if="!show || !items.length">追加ボタンを押してください</h2>
    <h2 v-else>追加ボタンを押してください</h2>
    <button class="decision">決定</button>
  </div>
  <!--ここまで-->
  <!-- <h2 id="summary">合計:{{ addForm }}</h2> -->

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

/**以下はカードタイプデザインの初期案用css */
#sec {
  padding: 0;
  background: #fff;
  text-align: center;
  word-wrap: break-word;
}

#sec ul {
  margin: 1 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  list-style: none;
  border: none;
}
#sec ul li {
  padding: 10px;
  width: 100px;
  transition: box-shadow 0.3s;
}
#sec ul li:hover {
  box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);
}
#sec ul li:hover span {
  color: #63b7e6;
}
#sec ul li:hover p {
  color: #555;
}
#sec ul li:hover .name {
  color: #63b7e6;
}
#sec ul li:hover .name:after {
  width: 100px;
}
#sec ul li span {
  font-size: 2.6em;
  display: block;
  transition: color 0.3s;
  color: #a2a2a2;
}
#sec ul li span:before,
#sec ul li span:after {
  position: static;
}
#sec ul li .name {
  color: #6f6f6f;
  display: inline-block;
  font-size: 16px;
  font-weight: 100;
  transition: color 0.4s;
}
#sec ul li .name:after {
  content: '';
  position: relative;
  left: 50%;
  top: 20px;
  transform: translateX(-50%);
  display: block;
  width: 40px;
  height: 1px;
  background: #6f6f6f;
  transition: width 0.5s;
}
/* #sec ul li p {
  color: #a2a2a2;
  text-align: left;
  text-indent: 1em;
  font-size: 16px;
  line-height: 26px;
  transition: color 0.3s;
} */
#card_content {
  display: flex;
}
#card_list {
  background-color: #cbeef0;
  border-radius: 8%;
  margin: 3px;
}
/**ここまで */

/**カード内フォームのcss */
.price_input {
  width: 65%;
  height: 32px;
  font-size: 20px;
  text-align: center;
}
</style>
