import { AnyAction } from "@reduxjs/toolkit";
import axios from "../../config/endpoint";

const getAll = (page: any, limit: any, search: any, status: AnyAction) => {
  return axios.get(`/hr/employee/?page=${page}&limit=${limit}&search=${search}&status=${status}`);
};

const getAllUser = () => {
  return axios.get(`/hr/employee/users`);
};

const create = (data: any) => {
  console.log("data", data);
  return axios.post("/hr/employee", data, { headers: { "Content-Type": "multipart/form-data" } });
};

const update = (id: number, data: any) => {
  return axios.put(`/hr/employee/${id}`, data);
};

const remove = (id: number) => {
  return axios.delete(`/hr/employee/${id}`);
};

const ApiMethodEmployee = {
  getAll,
  create,
  update,
  remove,
  getAllUser,
};

export default ApiMethodEmployee;
