import axios from "axios";
import store from "./store/store";

let BASE_URL = "https://binar-second-hand.herokuapp.com/api-docs/";
export { BASE_URL };

const requestAPI = () => {
  const token = store.getState().user.data?.token;
  const authorization = token ? { Authorization: token } : {};
  console.log(token);

  return axios.create({
    baseUrl: BASE_URL,
    headers: authorization,
  });
};

export default requestAPI;