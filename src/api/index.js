import axios from "axios";

const API = axios.create({ baseURL: "https://dog.ceo/api" });

export const getBreadsList = () => API.get("/breeds/list/all");
export const getImagesByBread = (bread) => API.get(`/breed/${bread}/images`);
