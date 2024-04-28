import React, { useContext, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import routes from '../../routes';
import classes from './app.module.css';
import { ThemeContext } from '../../contexts/theme';
import Header from '../Header';

const App = () => {
    const [{ theme, isDark }] = useContext(ThemeContext);

    useEffect(() => {
        document.body.style.backgroundColor = theme.backgroundColor;
    }, [isDark, theme]);

    return (
        <div className={classes.root}>
            <Header />
            <Routes>
                {routes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        element={route.component}
                    />
                ))}
            </Routes>
        </div>
    );
};

export default App;
