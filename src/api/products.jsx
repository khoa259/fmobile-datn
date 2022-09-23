import instance from "./instance";

export const getAll = () => {
  const url = `/products`;
  return instance.get(url);
};
