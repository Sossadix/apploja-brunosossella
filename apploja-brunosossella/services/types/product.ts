import { data } from '../../data';

export const getAllProducts = () => {
  return data.products;
};

export const getProductById = (id: number) => {
  return data.products.find((item: any) => item.id === id);
};

export const getProductsByCategory = (idCategory: number) => {
  return data.products.filter((item: any) => item.idCategory === idCategory);
};
