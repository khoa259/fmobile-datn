import mainAPI from "./mainAPI";

export const listCategory = () => {
  const url = "category";
  return mainAPI.get(url);
};
