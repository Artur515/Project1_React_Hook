import React, {useContext} from 'react';
import {myProductContext} from "../../App";
import {customCountLength} from "../../helpers";
import style from './tooltip.module.css'

const Tooltip = () => {
    const {basketProducts} = useContext(myProductContext)

    return (
        <div className={style.tooltip}>
            {customCountLength(basketProducts)}
        </div>
    );
};

export default Tooltip;