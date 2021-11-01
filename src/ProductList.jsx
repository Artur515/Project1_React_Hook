import React, {useContext} from 'react';
import ProductCard from "./components/productCard/ProductCard";
import {myProductContext} from "./App";
import Loader from "./ui/loader/Loader";

const ProductList = () => {
    const {products, loading} = useContext(myProductContext)

    return (
        <>
            {loading ? <Loader/> : products.map((product) => <ProductCard key={product.id} product={product}/>)}
        </>
    );
};

export default ProductList;