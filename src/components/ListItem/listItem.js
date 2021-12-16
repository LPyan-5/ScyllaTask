import React from "react";
import Typo from "../UI/Typo";
import classes from './listItem.module.css';

const ListItem = ({ user }) => {
    const { name, location, email, picture } = user;

    return (
        <div className={classes.root}>
            <img src={picture.medium} alt={name.first} className={classes.pic} />
            <div className={classes.details}>
                <div className={classes.row}>
                    <Typo as="p" variant="p" font="bold" className={classes.title}>Name:</Typo> 
                    <Typo>{name.first} {name.last}</Typo>
                </div>
                <div  className={classes.row}>
                    <Typo as="p" variant="p" font="bold" className={classes.title}>Country:</Typo> 
                    <Typo>{location.country}</Typo>
                </div>
                <div  className={classes.row}>
                    <Typo as="p" variant="p" font="bold" className={classes.title}>Email:</Typo> 
                    <Typo>{email}</Typo>
                </div>
            </div>
        </div>
    );
};

export default ListItem;