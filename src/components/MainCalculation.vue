<script setup>
import { ref } from 'vue';
const items = {
  item1: {
    id: 1,
    name: 'first',
    price: 100,
    count: 10
  }
};

const countItem = ref([]);
const show = ref(false);

const addItem = () => {
  show.value = true;
  countItem.value.push(1);
};

const deleteItem = () => {
  countItem.value.pop(1);
};
</script>

<template>
  <button class="addContents" @click="addItem">+</button>
  <button class="deleteContents" @click="deleteItem">-</button>
  <!--以下は後日置換予定-->
  <div id="sec">
    <ul id="card_contents" v-if="show && countItem.length">
      <li id="card_list" v-for="item of countItem">
        <span class="fa fa-code"></span>

        <p class="title01">タイトル</p>
        <p>だみー</p>
        name:<input type="text" class="names" placeholder=" 名前を入力して下さい" style="width: 100%" />
        <!-- 確定ボタン入力後に発火<input type="number" class="count_items" placeholder=" 数値を入力して下さい" /> -->
        price:<input type="number" class="price_input" v-model="priceRef" style="width: 65%; height: 32px" />
      </li>
    </ul>
    <h2 v-else>追加ボタンを押してください</h2>
    <button class="decision">決定</button>
  </div>
  <!--ここまで-->
  <!-- <h2 id="summary">合計:{{ addForm }}</h2> -->

  <ul v-if="items">
    <li v-for="item of items">{{ item }}</li>
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
  padding: 40px;
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
#sec ul li:hover .title01 {
  color: #63b7e6;
}
#sec ul li:hover .title01:after {
  width: 25px;
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
#sec ul li .title01 {
  color: #6f6f6f;
  display: inline-block;
  font-size: 18px;
  font-weight: 100;
  transition: color 0.3s;
}
#sec ul li .title01:after {
  content: '';
  position: relative;
  left: 50%;
  top: 20px;
  transform: translateX(-50%);
  display: block;
  width: 40px;
  height: 1px;
  background: #6f6f6f;
  transition: width 0.3s;
}
#sec ul li p {
  color: #a2a2a2;
  text-align: left;
  text-indent: 1em;
  font-size: 16px;
  line-height: 26px;
  transition: color 0.3s;
}
#card_content {
  display: flex;
}
#card_list {
  background-color: #ececec;
  border-radius: 8%;
  margin: 3px;
}
/**ここまで */
</style>
