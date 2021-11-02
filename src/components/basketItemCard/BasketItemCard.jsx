import React, {useContext} from 'react';
import {subTotal} from "../../helpers";
import style from './basketItemCard.module.css'
import {myProductContext} from "../../App";

const BasketItemCard = ({product}) => {
    const {title, price, image, quantity} = product
    const {handleDeleteProductApi} = useContext(myProductContext)

    return (
        <>
            <div className={style.basketCard}>
                <img src={image} alt="basket_item_image"/>
                <p>{title}</p>
                <p> {quantity} * {price} = {subTotal(quantity, price)} $</p>
            </div>
            <img className={style.basketCard_delete} onClick={() => handleDeleteProductApi(product.id)}
                 src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/50/000000/external-delete-miscellaneous-kiranshastry-solid-kiranshastry.png"
                 alt='delete'/>
        </>

    );
};

export default BasketItemCard;