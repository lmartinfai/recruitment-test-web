import axios from "axios";

export const customAxiosInstance= axios.create({
    baseURL: `https://restcountries.com/v3.1/capital/`,
    headers: {
      Accept: "application/json",
    },
    withCredentials: true,
  });