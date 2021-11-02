import Header from "./components/header/Header";
import Wrapper from "./container/Wrapper";
import ProductList from "./components/productList/ProductList";
import {createContext, useEffect, useState} from "react";
import {
    deleteBasketProduct,
    getAllProducts,
    getBasketProducts,
    postProductToBasket,
    updateBasketProductWithId
} from "./api";
import CustomInput from "./ui/customInput/CustomInput";
import Loader from "./ui/loader/Loader";
import ErrorPage from "./pages/errorPage/ErrorPage";
import './App.css';


export const myProductContext = createContext(null)


const App = () => {
    const [productList, setProductList] = useState([])
    const [filteredList, setFilteredList] = useState([])
    const [basketList, setBasketList] = useState([])
    const [showMessage, setShowMessage] = useState(false)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const getAllProductsWithApi = async () => {
        setLoading(true)
        try {
            const {data} = await getAllProducts()
            setProductList(data)
            setFilteredList(data)
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }
    }

    const getBasketProductsApi = async () => {
        try {
            const {data} = await getBasketProducts()
            setBasketList(data)
        } catch (e) {
            setError(error)
        }
    }

    useEffect(() => {
        getAllProductsWithApi()
        getBasketProductsApi()
        // eslint-disable-next-line
    }, [])

    const handleSearch = (string) => {
        const searchResult = productList.filter((product) => {
            return product.title.toLowerCase().substring(0, 4).includes(string)
        })
        setFilteredList(searchResult)
    }


    const handleAddToBasket = async (obj) => {
        const newObj = {...obj, quantity: 1}
        const basketProduct = basketList.find((product) => product.id === obj.id)
        if (!basketProduct) {
            try {
                const {data} = await postProductToBasket(newObj)
                setBasketList([...basketList, data])
                setShowMessage(true)
                setTimeout(() => {
                    setShowMessage(false)
                }, 1500)
            } catch (error) {
                setError(error.message)
            }
        } else {
            try {
                const updatedObj = {...basketProduct, quantity: basketProduct.quantity + 1}
                await updateBasketProductWithId(updatedObj)
                await getBasketProductsApi()
                setShowMessage(true)
                setTimeout(() => {
                    setShowMessage(false)
                }, 1500)
            } catch (e) {
                setError(e.message)
            }
        }

    }

    const handleDeleteProductApi = async (id) => {
        try {
            await deleteBasketProduct(id)
            await getBasketProductsApi()
        } catch (error) {
            setError(error)
        }
    }

    const handleRemoveError = () => {
        setError(null)
    }

    return (
        <myProductContext.Provider
            value={{
                products: filteredList,
                basketProducts: basketList,
                errors: error,
                loading: loading,
                handleAddToBasket: handleAddToBasket,
                handleDeleteProductApi: handleDeleteProductApi,
                handleRemoveError: handleRemoveError
            }}>
            <Header/>
            <CustomInput handleSearch={handleSearch}/>
            {error !== null ?
                <ErrorPage/> :
                <Wrapper>
                    {showMessage && <div className='product_message'>Product added</div>}
                    {loading ? <Loader/> : <ProductList/>}
                </Wrapper>
            }

        </myProductContext.Provider>
    );
}

export default App;
