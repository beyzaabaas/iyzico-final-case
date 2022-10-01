import axios from "axios";
import { API_URL } from "../env/config";

export const baseService = {
  getlAll: async (url) => {
    let response = [];
    await axios
      .get(API_URL + url)
      .then((res) => {
        response = res.data;
      })
      .catch((err) => {
        console.log("Error");
      });
    return response;
  },
  getById: (url, id) => {
    let response = {};
    return axios.get(API_URL + url + "/" + id);
    // .then((res) => {
    //   response = res.data;
    // })
    // .catch((err) => {
    //   console.log("Error");
    // });
  },
};
