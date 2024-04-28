import React, { useContext } from 'react';
import classes from './header.module.css';
import Switch from '../Switch';
import { ThemeContext } from '../../contexts/theme';
import Search from '../Search';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
    const [{ isDark }, toggleTheme] = useContext(ThemeContext);
    const users = useSelector((state) => state.users);

    return (
        <div className={`${classes.root} ${isDark && classes.darkMode}`}>
            <div className={classes.top}>
                <Link to="/">
                    <img
                        src={`/images/${isDark ? 'logoDark' : 'logoLight'}.png`}
                        className={classes.logo}
                        alt=""
                    />
                </Link>
                <div className={classes.swicthWrapper}>
                    <Switch action={toggleTheme} value={isDark} />
                </div>
            </div>
            <Search users={users} />
        </div>
    );
};

export default Header;
