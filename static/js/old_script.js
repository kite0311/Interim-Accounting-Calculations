const addButton = document.getElementById('add');
const deleteButton = document.getElementById('delete');
const calculate = document.getElementById('calculate');

//追加ボタンクリック
addButton.addEventListener('click', () => {
  addInputForm();
  //TODO 最大追加件数の追加 ...10個まで
});

//削除ボタンクリック
deleteButton.addEventListener('click', () => {
  deleteInputForm();
});

/**
 * 入力フォームhtml予想
  <table>
    <tr>
      <td><img src="../images/circle_sample.png" alt="" width="100"></td>
    </tr>
    <tr>
      <td><input type="text"></td>
    </tr>
    </table>
 */
/*入力フォームを生成*/
function addInputForm() {
  if (calculate.childElementCount != 10) {
    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    //TODO 数値のみを受け取るバリデーションを付与
    input.setAttribute('maxLength', '10');
    input.setAttribute('size', '5');
    input.setAttribute('placeholder', '金額を入力');
    input.setAttribute('name', 'price');
    input.id = 'numInput';
    calculate.appendChild(input);
  }
}

/*テキストボックスを削除*/
function deleteInputForm() {
  if (calculate.hasChildNodes()) {
    calculate.removeChild(calculate.firstChild);
  }
}
