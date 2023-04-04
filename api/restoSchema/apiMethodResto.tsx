import axios from '../../config/endpoint'

// Resto_Menus

const getAll = (searchTerm: any, page: number, limit: number) => {
  return axios.get(
    `/resto-menus?page=${page}&limit=${limit}&searchTerm=${searchTerm}`
  )
}

const create = (data: any) => {
  return axios.post(`resto-menus`, data)
}

const update = (id: number, data: any) => {
  return axios.put(`resto-menus/${id}`, data)
}

const remove = (id: number) => {
  return axios.delete(`resto-menus/${id}`)
}

const get = (id: number) => {
  return axios.get(`resto-menus/${id}`)
}

const search = (searchTerm: any) => {
  return axios.get(`resto-menus?searchTerm=${searchTerm}`)
}

// Resto_menu_photos

const getAllPhotos = () => {
  return axios.get('resto-menu-photos')
}

const uploadPhotos = (data: any) => {
  return axios.post('resto-menu-photos', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
}

const updatePhotos = (id: number, data: any) => {
  return axios.put(`resto-menu-photos/${id}`, data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
}

const removePhotos = (id: number) => {
  return axios.delete(`resto-menu-photos/${id}`)
}

const getIdPhotos = (id: number) => {
  return axios.get(`resto-menu-photos/${id}`)
}

const apiMethodReme = {
  getAll,
  create,
  update,
  remove,
  get,
  search,
  getAllPhotos,
  uploadPhotos,
  updatePhotos,
  removePhotos,
  getIdPhotos,
}
export default apiMethodReme
