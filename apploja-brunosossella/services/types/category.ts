import { data } from '../../data';

export const getAllCategories = () => {
  return data.categories;
};

export const getCategoryById = (id: number) => {
  return data.categories.find((item: any) => item.id === id);
};
