import instance from "./instance";

export const orderProducts = (order) => {
  return instance.post("/orders", order);
};
