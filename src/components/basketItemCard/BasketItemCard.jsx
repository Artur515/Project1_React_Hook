import React from 'react';
import style from './basketItemCard.module.css'

const BasketItemCard = () => {
    return (
        <>
            <div className={style.basketCard}>
                <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/d0918853062101.5926759b47c74.jpg"
                     alt="basket_item_image"/>
                <p>Title</p>
                <p>Quantity * Price</p>
            </div>
            <img className={style.basketCard_delete}
                 src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/50/000000/external-delete-miscellaneous-kiranshastry-solid-kiranshastry.png"
                 alt='delete'/>
        </>

    );
};

export default BasketItemCard;