import instance from "./instance";

export const getAll = () => {
  const url = `/products`;
  return instance.get(url);
};
export const getProduct = (id) => {
  const url = `/products/${id}`;
  return instance.get(url);
};
export const addPrd = (data) => {
  const url = "/products";
  return instance.post(url, data);
};
export const removePrd = (id) => {
  const url = `/products/${id}`;
  return instance.delete(url);
};
