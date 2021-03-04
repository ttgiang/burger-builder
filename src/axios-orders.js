import axios from "axios";

import { FIREBASE } from "./store/firebase/firebase";

const instance = axios.create({
  // baseURL: "https://react-burger-bulider-ac0d1-default-rtdb.firebaseio.com/",
  baseURL: FIREBASE,
});

export default instance;
