import React, { useContext } from "react";
import AppWrapper from "../UI/AppWrapper";
import classes from "./header.module.css";
import Switch from '../Switch';
import { ThemeContext } from '../../contexts/theme';

const Header = () => {
	const [{ isDark }, toggleTheme ] = useContext(ThemeContext);
	return (
		<div className={`${classes.root} ${isDark && classes.darkMode}`} >
			<AppWrapper>
				<div className={classes.top}>
					<Switch action={toggleTheme} value={isDark}/>
				</div>
			</AppWrapper>
		</div>
	);
};

export default Header;