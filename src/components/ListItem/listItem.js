import React, { useContext } from "react";
import Typo from "../UI/Typo";
import classes from './listItem.module.css';
import { ThemeContext } from '../../contexts/theme';

const ListItem = ({ user }) => {
    const { name, location, email, picture } = user;
    const [{ isDark }] = useContext(ThemeContext);

    return (
        <div className={`${classes.root} ${isDark && classes.darkMode}`}>
            <img src={picture.medium} alt={name.first} className={classes.pic} />
            <div className={classes.details}>
                <div className={classes.row}>
                    <Typo as="p" variant="p" font="bold" color={isDark ? "lightGreen" : "primary"} className={classes.title}>Name:</Typo> 
                    <Typo color={isDark ? "light" : "primary"} >{name.first} {name.last}</Typo>
                </div>
                <div  className={classes.row}>
                    <Typo as="p" variant="p" font="bold" color={isDark ? "lightGreen" : "primary"} className={classes.title}>Country:</Typo> 
                    <Typo color={isDark ? "light" : "primary"}>{location.country}</Typo>
                </div>
                <div  className={classes.row}>
                    <Typo as="p" variant="p" font="bold" color={isDark ? "lightGreen" : "primary"} className={classes.title}>Email:</Typo> 
                    <Typo color={isDark ? "light" : "primary"}>{email}</Typo>
                </div>
            </div>
        </div>
    );
};

export default ListItem;