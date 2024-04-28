import React, { useContext } from 'react';
import defaultClasses from './button.module.css';
import { mergeClasses } from '../../helper/mergeClasses';
import { ThemeContext } from '../../contexts/theme';

const Button = (props) => {
    const { type, disabled, onClick, label } = props;
    const classes = mergeClasses(defaultClasses, props.classes);
    const [{ isDark }] = useContext(ThemeContext);

    return (
        <button
            type={type}
            className={`${classes.root}
                        ${classes.primary} ${isDark && classes.darkMode}
                        ${disabled ? classes.disabledButton : ''}`}
            onClick={onClick}
            disabled={disabled}
        >
            <span className={classes.button_label}>{label}</span>
        </button>
    );
};

export default Button;
