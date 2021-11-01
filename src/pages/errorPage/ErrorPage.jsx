import React from 'react';
import style from './error.module.css'

const ErrorPage = () => {
    return (
        <div className={style.error}>
            <h1 className='error'>Error</h1>
            <h4 className='cursor'>Go back</h4>
            <button></button>
        </div>
    );
};

export default ErrorPage;