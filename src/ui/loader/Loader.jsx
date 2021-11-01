import React from 'react';
import style from './loader.module.css'

const Loader = () => {
    return (
        <section>
            <span className={style.load}></span>
        </section>
    );
};

export default Loader;