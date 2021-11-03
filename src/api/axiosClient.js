import axios from "axios";
import { toast } from "react-toastify";

export const baseURL = process.env.REACT_APP_BASE_URL;

export const axiosInstance = axios.create({
  baseURL: baseURL,
});

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    toast.error(error.response.data.message[0].messages[0].message);
    return Promise.reject(error);
  }
);

export function getImgUrl(url) {
  return baseURL + url.slice(1, url.length);
}
