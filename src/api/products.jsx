import instance from "./instance";

export const getAll = () => {
  const url = `/products`;
  return instance.get(url);
};
export const getProduct = (id) => {
  const url = `/product/${id}`;
  return instance.get(url);
};
