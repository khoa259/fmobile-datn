import axios from "axios";

const instance = axios.create({
  baseURL: "https://62d6cb4a49c87ff2af2d5424.mockapi.io",
});
export default instance;
