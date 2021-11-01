import React from 'react';
import './customInput.scss'

const CustomInput = () => {
    return (
        <div className="form__group field">
            <input type="input" className="form__field" placeholder="Search" name="name"  required/>
            <label htmlFor="name" className="form__label">Search by name...</label>
        </div>
    );
};

export default CustomInput;