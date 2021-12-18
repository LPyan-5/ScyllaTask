import React, { useContext } from "react";
import classes from "./header.module.css";
import Switch from '../Switch';
import { ThemeContext } from '../../contexts/theme';
import Search from "../Search";
import { useSelector } from "react-redux";

const Header = () => {
	const [{ isDark }, toggleTheme ] = useContext(ThemeContext);
	const users = useSelector(state => state.users);

	return (
		<div className={`${classes.root} ${isDark && classes.darkMode}`} >
			<div className={classes.top}>
				<img src={`/images/${isDark ? "logoDark" : "logoLight"}.png`} className={classes.logo} alt=""/>
				<Switch action={toggleTheme} value={isDark}/>
			</div>
			<Search users={users}/>
		</div>
	);
};

export default Header;