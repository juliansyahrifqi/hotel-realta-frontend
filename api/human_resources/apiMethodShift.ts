import axios from "../../config/endpoint";

const getAll = () => {
  return axios.get("/hr/shift/");
};

const getById = (id: number) => {
  return axios.get(`/hr/shift/${id}`);
};

const create = (data: any) => {
  return axios.post("/hr/shift", data);
};

const update = (id: number, data: any) => {
  return axios.put(`/hr/shift/${id}`, data);
};

const remove = (id: number) => {
  return axios.delete(`/hr/shift/${id}`);
};

const apiMethodShift = {
  getAll,
  create,
  update,
  remove,
  getById,
};

export default apiMethodShift;
