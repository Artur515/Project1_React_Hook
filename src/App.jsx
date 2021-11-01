import Header from "./components/header/Header";
import Wrapper from "./container/Wrapper";
import ProductList from "./ProductList";
import {createContext, useEffect, useState} from "react";
import {getAllProducts} from "./api";
import CustomInput from "./ui/customInput/CustomInput";
import './App.css';


export const myProductContext = createContext(null)

const App = () => {
    const [productList, setProductList] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

//хорошо так
    const getAllProductsWithApi = async () => {
        try {
            const {data} = await getAllProducts()
            setProductList(data)
        } catch (e) {
            setError(error)
        }
    }


    useEffect(() => {
        // setLoading(true)
        // getAllProducts()
        //     .then(response => setProductList(response.data))
        //     .catch(error => setError(error.message))
        //     .finally(() => setLoading(false))
    }, [])


    return (
        <myProductContext.Provider value={{products: productList, errors: error, loading: loading}}>
            <Header/>
            <CustomInput/>
            <Wrapper>
                <ProductList/>
            </Wrapper>
        </myProductContext.Provider>
    );
}

export default App;
