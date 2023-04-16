import axios from "../../config/endpoint";

const getAll = (search: any, page: number, limit: number) => {
  return axios.get(`stocks/?search=${search}&pageNumber=${page}&pageSize=${limit}`);
};

const create = (data: any) => {
  return axios.post(`stocks`, data);
};

const update = (id: number, data: any) => {
  return axios.put(`stocks/${id}`, data);
};

const remove = (id: number) => {
  return axios.delete(`stocks/${id}`);
};

const getStocksList = async () => {
  return axios.get("stocks/prodvendor");
};

//  GET STOCK IMAGE
const getImg = (search: any, page: number, limit: number) => {
  return axios.get(`purchasing/photo?search=${search}&pageNumber=${page}&pageSize=${limit}`);
};

// ADD STOCK IMAGE
const createImg = (data: any) => {
  return axios.post("purchasing/photo", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

// STOCK DETAIL
const findStockDet = (id: any) => {
  return axios.get(`stocks/detail/${id}`);
};

const updateStockDet = (id: number, data: any) => {
  return axios.put(`stock-detail/${id}`, data);
};

const apiMethodStock = {
  getAll,
  create,
  update,
  remove,
  getStocksList,
  createImg,
  findStockDet,
  updateStockDet,
  getImg,
};

export default apiMethodStock;
