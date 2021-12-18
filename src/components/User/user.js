import React, { useContext, useMemo } from 'react';
import Typo from '../UI/Typo';
import classes from './user.module.css';
import { ThemeContext } from '../../contexts/theme';
import get from 'lodash/get';

const User = ({ user }) => {
    const [{ isDark }] = useContext(ThemeContext);

    const dateOfBirth = useMemo(() => {
        if(get(user, "dob.date", "")) {
            const date = new Date(user.dob.date);
            return date.getFullYear()+'-' + (date.getMonth()+1) + '-'+ date.getDate();
        }
        else {
            return "-";
        }
     
    }, [user]);

    return (
        <div className={classes.root}>
            <div className={classes.left}>
                <img src={user.picture.large} className={classes.userImage} alt=""/>
                <Typo as="p" variant="text" color={isDark ? "lightGreen" : "primary"}>{get(user, "name.title", "-")}. {get(user, "name.first", "-")} {get(user, "name.last", "-")}</Typo>
            </div>
            <div className={classes.right}>
                <div className={classes.rightTop}>
                    <div className={classes.detail}>
                        <Typo as="p" variant="text" font="bold" color={isDark ? "lightGreen" : "primary"} className={classes.title}>Date of birth:</Typo>
                        <Typo variant="text" color={isDark ? "light" : "primary"} className={classes.value}>{dateOfBirth}</Typo>
                    </div>
                    <div className={classes.detail}>
                        <Typo as="p" variant="text" font="bold" color={isDark ? "lightGreen" : "primary"} className={classes.title}>Age:</Typo>
                        <Typo variant="text" color={isDark ? "light" : "primary"} className={classes.value}>{get(user, "dob.age", "-")}</Typo>
                    </div>
                    <div className={classes.detail}>
                        <Typo as="p" variant="text" font="bold" color={isDark ? "lightGreen" : "primary"} className={classes.title}>Gender:</Typo>
                        <Typo variant="text" color={isDark ? "light" : "primary"} className={classes.value}>{get(user, "gender", "-")}</Typo>
                    </div>
                </div>
                <div className={classes.rightMiddle}>
                    <div className={classes.detailBottom}>
                        <Typo as="p" variant="text" font="bold" color={isDark ? "lightGreen" : "primary"} className={classes.titleBottom}>Country:</Typo>
                        <Typo variant="text" color={isDark ? "light" : "primary"} className={classes.value}>{get(user, "location.country", "-")}</Typo>
                    </div>
                    <div className={classes.detailBottom}>
                        <Typo as="p" variant="text" font="bold" color={isDark ? "lightGreen" : "primary"} className={classes.titleBottom}>State:</Typo>
                        <Typo variant="text" color={isDark ? "light" : "primary"} className={classes.value}>{get(user, "location.state", "-")}</Typo>
                    </div>
                    <div className={classes.detailBottom}>
                        <Typo as="p" variant="text" font="bold" color={isDark ? "lightGreen" : "primary"} className={classes.titleBottom}>Street:</Typo>
                        <Typo variant="text" color={isDark ? "light" : "primary"} className={classes.value}>{get(user, "location.street.name", "-")} {get(user, "location.street.number", "-")}</Typo>
                    </div>
                </div>
                <div className={classes.rightBottom}>
                    <div className={classes.detailBottom}>
                        <Typo as="p" variant="text" font="bold" color={isDark ? "lightGreen" : "primary"} className={classes.titleBottom}>Email:</Typo>
                        <Typo variant="text" color={isDark ? "light" : "primary"} className={classes.value}>{get(user, "email", "-")}</Typo>
                    </div>
                    <div className={classes.detailBottom}>
                        <Typo as="p" variant="text" font="bold" color={isDark ? "lightGreen" : "primary"} className={classes.titleBottom}>Phone:</Typo>
                        <Typo variant="text" color={isDark ? "light" : "primary"} className={classes.value}>{get(user, "phone", "-")}</Typo>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default User;