export const useCounter = () => {
  //＋ボタン押下時
  const increment = (item) => {
    item.total += 1;
  };

  //―ボタン押下時
  const decrement = (item) => {
    if (item.total > 0) {
      item.total -= 1;
    }
  };
  return { increment, decrement };
};
