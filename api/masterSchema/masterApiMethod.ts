import axios from "../../config/endpoint";


//===============ApiMethodREGION=============//
const getAllRegion = () => {
    return axios.get('/regions');
};
const createRegion = (data:any) => {
    return axios.post('/regions',data);
};
const updateRegion = (id: number, data:any) => {
    return axios.put(`/regions/${id}`,data);
};
const removeRegion = (id: number, data:any) => {
    return axios.delete(`/regions/${id}`,data);
};


const apiMethodRegion = {
    //===Region===//
    getAllRegion,
    createRegion,
    updateRegion,
    removeRegion
}

export default apiMethodRegion;