import { ref } from 'vue';

export const formValidator = (value) => {
  const isValid = ref(false);
  const isValidValue = (value, maxlength, minlength) => {
    if (value !== minlength && value <= maxlength) {
      isValid.value = true;
      return isValid;
    } else if (value === minlength) {
      isValid;
    } else {
      isValid;
    }
  };
  return { isValidValue };
};
