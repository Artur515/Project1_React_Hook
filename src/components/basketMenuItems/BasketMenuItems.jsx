import React, {useContext} from 'react';
import basketImage from '../../image/shopping-cart.png'
import BasketItemCard from "../basketItemCard/BasketItemCard";
import {myProductContext} from "../../App";
import './basketMenu.scss'
import Tooltip from "../../ui/tooltip/Tooltip";
import {countTotal} from "../../helpers";

const BasketMenuItems = () => {
    const {basketProducts} = useContext(myProductContext)


    return (
        <>
            {basketProducts.length > 0 && <Tooltip/>}
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
                    {basketProducts.length ? basketProducts.map((product) => {
                        return <li key={product.id}><BasketItemCard product={product}/></li>
                    }) : <div className='drawer_text'><h2>Basket is empty</h2></div>}
                </ul>
                <h2 className='drawer_total'>Total: {countTotal(basketProducts)} $</h2>
            </section>
        </>
    );
};

export default BasketMenuItems;