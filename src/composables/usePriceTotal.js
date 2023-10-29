import { computed } from 'vue';

export const usePriceTotal = (items) => {
  const total = computed(() => {
    let sum = 0;
    for (const item of items.value) {
      sum += item.price * item.counter;
    }
    return sum;
  });
  return {
    total
  };
};
