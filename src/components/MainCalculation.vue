<template>
  <main class="main">
    <div id="calculate"></div>
    <button class="add">
      <strong><h2>+</h2></strong>
    </button>
    <button class="delete">
      <strong><h2>-</h2></strong>
    </button>
    <h2 id="summary">合計:</h2>
  </main>
</template>

<style scoped>
.main {
  /* width: 400px;
  margin: auto; */
  text-align: center;
}

.add {
  border: none;
  border-radius: 50%;
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
  border-radius: 50%;
  display: flex;
  justify-content: center;
  width: 60px;
  box-sizing: border-box;
  background: skyblue;
  color: white;
  text-decoration: none;
  text-align: center;
}
</style>
