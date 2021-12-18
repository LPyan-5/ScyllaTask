import React, { useContext, useEffect } from 'react';
import Routes from '../../routes';
import { renderRoutes } from "react-router-config";
import classes from './app.module.css';
import { ThemeContext } from '../../contexts/theme';
import Header from '../Header';

const App = () => {
	const [{ theme, isDark } ] = useContext(ThemeContext);

	useEffect(() => {
		document.body.style.backgroundColor = theme.backgroundColor;
	}, [isDark, theme]);
 
	return (
		<div className={classes.root}>
			<Header/>
			{renderRoutes(Routes)}
		</div>
	);
};

export default App;