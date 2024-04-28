import React from 'react';
import classes from './input.module.css';

const Input = ({ type, value, onChange, disabled, placeholder }) => {
    const commonParams = {
        type,
        value,
        onChange,
        disabled,
        placeholder,
    };

    return <input {...commonParams} className={classes.input} />;
};

export default Input;
