import React from 'react';
import BasketMenuItems from "../basketMenuItems/BasketMenuItems";
import style from './header.module.css'

const Header = () => {
    return (
        <div className={style.header}>
            <h1>Cafe Logo</h1>
            <BasketMenuItems/>
        </div>
    );
};

export default Header;