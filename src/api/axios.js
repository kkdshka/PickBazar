import axios from "axios";
import { toast } from "react-toastify";

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

axiosInstance.interceptors.response.use(
  function (response) {
    toast.success("You successfully signed up");
    return response;
  },
  function (error) {
    toast.error(error.response.data.message[0].messages[0].message);
    return Promise.reject(error);
  }
);
