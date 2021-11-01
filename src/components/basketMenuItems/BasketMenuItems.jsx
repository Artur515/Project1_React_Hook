import React from 'react';
import basketImage from '../../image/shopping-cart.png'
import BasketItemCard from "../basketItemCard/BasketItemCard";
import './basketMenu.scss'

const BasketMenuItems = () => {
    return (
        <>
            <input id="hamburger" className="hamburger" type="checkbox"/>
            <img src={basketImage} className='hamburger_image' alt='basket'/>
            <label className="hamburger" htmlFor="hamburger">
                <i></i>
                <div>
                    <p className='close'>close</p>
                    <p className='open'>Basket</p>
                </div>
            </label>
            <section className="drawer-list">
                <ul>
                    <li><BasketItemCard/></li>
                    <li><BasketItemCard/></li>
                    <li><BasketItemCard/></li>
                    <li><BasketItemCard/></li>
                </ul>
            </section>
        </>
    );
};

export default BasketMenuItems;