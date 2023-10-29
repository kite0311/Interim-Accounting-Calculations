export const useCounter = () => {
  //＋ボタン押下時
  const increment = (item) => {
    item.counter += 1;
  };

  //―ボタン押下時
  const decrement = (item) => {
    if (item.counter > 0) {
      item.counter -= 1;
    }
  };
  return { increment, decrement };
};
