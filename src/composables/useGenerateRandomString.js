import { nanoid } from 'nanoid';

export const useGenerateRandomString = () => {
  const generateId = () => {
    const id = nanoid(10);
    return 'ID:' + id;
  };
  return { generateId };
};

//TODO IDはdatabaseで保存しておきたい。セキュリティ面でも
