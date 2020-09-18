import axios from "axios";
import axiosWithAuth from "../utils/axiosWithAuth";

export const fetchBubbles = () => {
  return axiosWithAuth
    .get("/api/colors")
    .then((res) => {
      console.log(res);
      res;
    })
    .catch((err) => {
      console.log(err);
    });
};
