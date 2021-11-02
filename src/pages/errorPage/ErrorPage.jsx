import React, {useContext} from 'react';
import style from './error.module.css'
import {myProductContext} from "../../App";
import Button from "../../ui/button/Button";

const ErrorPage = () => {
    const {handleRemoveError} = useContext(myProductContext)
    return (
        <div className={style.error}>
            <h1 className='error'>Error</h1>

            <Button onClick={handleRemoveError}>Go back</Button>
        </div>
    );
};

export default ErrorPage;