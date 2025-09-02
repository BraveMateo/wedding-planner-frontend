import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const savePlan = async (data) => {
  const res = await API.post("/plans", data);
  return res.data;
};

export const getPlan = async (shareId) => {
  const res = await API.get(`/plans/${shareId}`);
  return res.data;
};
