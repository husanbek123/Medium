import axios from "axios";

export const instance = axios.create({
  baseURL: "http://localhost:3030/",
  timeout: Infinity,
  headers: { "Content-Type": "application/json" },
});

const baseURL = "http://localhost:3030/";
