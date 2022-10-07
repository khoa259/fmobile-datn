import instance from "./instance";

export const getAll = () => {
  const url = `/products`;
  return instance.get(url);
};
export const getProduct = (id) => {
  const url = `/products/${id}`;
  return instance.get(url);
};
export const addPrd = (product) => {
  const url = "/products";
  return instance.post(url, product);
};
export const removePrd = (id) => {
  const url = `/products/${id}`;
  return instance.delete(url);
};
export const updatePrd = (product) => {
  const url = `/products/${product.id}`;
  return instance.put(url, product);
};
