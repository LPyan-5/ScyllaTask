import React from 'react';
import classes from './switch.module.css';

const Switch = (props) => {
    const { action, value } = props;
    return (
        <div className={classes.switchContainer}>
            <input
                onChange={(e) => action(e.target.checked)}
                id={classes.switchFlat}
                className={`${classes.switch} ${classes.switchFlat}`}
                type="checkbox"
                checked={value}
            />
            <label htmlFor={classes.switchFlat}></label>
        </div>
    );
};

export default Switch;
