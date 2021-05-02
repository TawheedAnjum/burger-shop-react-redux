import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-shop-react-redux-default-rtdb.firebaseio.com/",
});

export default instance;
