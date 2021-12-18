import React, { useContext } from "react";
import Typo from "../UI/Typo";
import classes from './listItem.module.css';
import { ThemeContext } from '../../contexts/theme';
import { Link } from 'react-router-dom';

const ListItem = ({ user }) => {
    const { name, location, email, picture } = user;
    const [{ isDark }] = useContext(ThemeContext);

    return (
        <Link to={`/user/${user.login.username}`} className={`${classes.root} ${isDark && classes.darkMode}`}>
            <img src={picture.medium} alt={name.first} className={classes.pic} />
            <div className={classes.details}>
                <div className={classes.row}>
                    <Typo as="p" variant="text" font="bold" color={isDark ? "lightGreen" : "primary"} className={classes.title}>Name:</Typo> 
                    {user.highlightedName ?
                        <Typo variant="text" color={isDark ? "light" : "primary"} dangerouslySetInnerHTML={{ __html: user.highlightedName  }} className={isDark ? classes.darkHighlight : classes.highlighted}/>
                    :
                        <Typo variant="text" color={isDark ? "light" : "primary"}>{`${name.first} ${name.last}`}</Typo>
                    }
                </div>
                <div  className={classes.row}>
                    <Typo as="p" variant="text" font="bold" color={isDark ? "lightGreen" : "primary"} className={classes.title}>Country:</Typo> 
                    <Typo variant="text" color={isDark ? "light" : "primary"}>{location.country}</Typo>
                </div>
                <div  className={classes.row}>
                    <Typo as="p" variant="text" font="bold" color={isDark ? "lightGreen" : "primary"} className={classes.title}>Email:</Typo> 
                    <Typo variant="text" color={isDark ? "light" : "primary"}>{email}</Typo>
                </div>
            </div>
        </Link>
    );
};

export default ListItem;