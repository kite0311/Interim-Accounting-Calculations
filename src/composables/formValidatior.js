import { ref } from 'vue';

export const formValidator = (value) => {
  const isValid = ref(false);
  const isValidValue = (value) => {
    if (value !== 0 && value <= 12) {
      isValid.value = true;
      return isValid;
    } else if (value === 0) {
      isValid;
    } else {
      isValid;
    }
  };
  return { isValidValue };
};
