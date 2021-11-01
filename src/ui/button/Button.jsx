import React from 'react';
import style from './button.module.css'

const Button = (props) => {
    return (
        <div className={style.button}>{props.children}</div>
    );
};

export default Button;