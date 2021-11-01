import React from 'react';
import style from './wrapper.module.css'

const Wrapper = (props) => {

    return (
        <div className={style.wrapper}>
            {props.children}
        </div>
    );
};

export default Wrapper;