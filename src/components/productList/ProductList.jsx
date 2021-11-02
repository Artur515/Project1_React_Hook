import React, {useContext} from 'react';
import ProductCard from "../productCard/ProductCard";
import {myProductContext} from "../../App";
import style from './productList.module.css'

const ProductList = ({handleAddToBasket}) => {
    const {products} = useContext(myProductContext)

    return (
        <>
            {products.length === 0 ? <div className={style.text}><h2>No results found. Try another request</h2></div> :
                products.map((product) => <ProductCard key={product.id} product={product}/>)}
        </>
    );
};

export default ProductList;