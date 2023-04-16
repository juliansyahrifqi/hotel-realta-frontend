import axios from "../../config/endpoint";

const getAll = () => {
  return axios.get("/hr/job-role");
};

const create = (data: any) => {
  return axios.post("/hr/job-role/", data);
};

const update = (id: number, data: any) => {
  return axios.put(`/hr/job-role/${id}`, data);
};

const remove = (id: number) => {
  return axios.delete(`/hr/job-role/${id}`);
};

const apiMethodJobRole = {
  getAll,
  create,
  update,
  remove,
};

export default apiMethodJobRole;
