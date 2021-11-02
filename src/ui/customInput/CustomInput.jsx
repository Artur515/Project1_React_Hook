import React from 'react';
import './customInput.scss'

const CustomInput = ({handleSearch}) => {
    return (
        <div className="form__group field">
            <input type="input" className="form__field" placeholder="Search" name="name" required
                   onChange={(event) => handleSearch(event.target.value.toLowerCase())}/>
            <label htmlFor="name" className="form__label">Search by name...</label>
        </div>
    );
};

export default CustomInput;