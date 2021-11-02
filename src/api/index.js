import axios from "axios";
import {BASE_API} from "../constants";

export const getAllProducts = () => {
    return axios.get(BASE_API + '/data')
}


export const postProductToBasket = (product) => {
    return axios.post(BASE_API + '/basket', product)
}


export const updateBasketProductWithId = (product) => {
    return axios.put(BASE_API + `/basket/${product.id}`, product)
}


export const getBasketProducts = () => {
    return axios.get(BASE_API + '/basket')
}


export const deleteBasketProduct = (id) => {
    return axios.delete(BASE_API + `/basket/${id}`)
}