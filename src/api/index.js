import axios from "axios";
import {BASE_API} from "../constants";

export const getAllProducts = () => {
    return axios.get(BASE_API + '/data')
}