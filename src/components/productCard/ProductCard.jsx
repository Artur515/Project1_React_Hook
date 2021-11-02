import React, {useContext} from 'react';
import Button from "../../ui/button/Button";
import style from './productCard.module.css'
import {myProductContext} from "../../App";


const ProductCard = ({product}) => {
    const {handleAddToBasket} = useContext(myProductContext)
    const {image, price, title, ingredients} = product


    return (
        <div className={style.card}>
            <img
                src={image}
                alt="product_image"/>
            <div className={style.card_container}>
                <div className={style.card_price}>
                    <h3>{title}</h3>
                    <h4>{price}</h4>
                </div>
                <div className={style.card_description}>{ingredients.map((ingredient, index) => <li
                    key={index}>{ingredient},</li>)}</div>
                <Button onClick={()=>handleAddToBasket(product)}>Add to card</Button>
            </div>
        </div>
    );
};

export default ProductCard;