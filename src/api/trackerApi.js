import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const instance = axios.create({
  baseURL: "https://3b3a-94-254-166-135.ngrok-free.app",
});

instance.interceptors.request.use(
  async (config) => {
    try {
      const token = await AsyncStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    } catch (err) {
      throw err;
    }
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default instance;
