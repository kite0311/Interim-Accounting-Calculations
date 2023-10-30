import { nanoid } from 'nanoid';

export const useGenerateId = () => {
  const generateId = () => {
    const id = nanoid(10);
    return id;
  };
  return { generateId };
};
