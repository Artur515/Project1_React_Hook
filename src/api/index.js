import axios from "axios";

export const getAllProducts = () => {
    return axios.get('/data')
}


export const postProductToBasket = (product) => {
    return axios.post('/basket', product)
}


export const updateBasketProductWithId = (product) => {
    return axios.put(`/basket/${product.id}`, product)
}


export const getBasketProducts = () => {
    return axios.get('/basket')
}


export const deleteBasketProduct = (id) => {
    return axios.delete(`/basket/${id}`)
}