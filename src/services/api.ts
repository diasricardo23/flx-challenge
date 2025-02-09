import axios from "axios";

const API = axios.create({
  baseURL: "https://67a7a1cd203008941f682a38.mockapi.io/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;