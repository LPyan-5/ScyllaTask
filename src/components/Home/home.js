import React, { useCallback, useEffect, useState, useContext } from 'react';
import classes from './home.module.css';
import axios from 'axios';
import Typo from '../UI/Typo';
import Button from '../Button';
import List from '../List';
import { ThemeContext } from '../../contexts/theme';
import { actions } from '../../store/actions/users';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
    const dispatch = useDispatch();
    const [{ isDark }] = useContext(ThemeContext);
    const [getErr, setGetErr] = useState('');
    const [isFetching, setIsFetching] = useState(false);
    const [page, setPage] = useState(0);
    const users = useSelector((state) => state.users);

    const handleFetchUsers = useCallback(async () => {
        try {
            setIsFetching(true);
            const response = await axios.get(
                `https://randomuser.me/api/?page=${page}&results=8&nat=us,gb`,
            );
            localStorage.setItem(
                'users',
                JSON.stringify([...users, ...response.data.results]),
            );
            dispatch(actions.setUsers([...users, ...response.data.results]));
            setGetErr('');
        } catch (error) {
            setGetErr('Error while loading data. Try again later.');
        } finally {
            setIsFetching(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [users, page]);

    const loadMore = useCallback(() => {
        setPage(page + 1);
    }, [page]);

    useEffect(() => {
        handleFetchUsers();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        handleFetchUsers();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    return (
        <div className={classes.root}>
            <Typo
                variant="title"
                font="bold"
                color={isDark ? 'lightGreen' : 'secondary'}
            >
                List of users
            </Typo>
            <div className={classes.content}>
                {getErr && (
                    <Typo variant="p" font="medium" color="secondary">
                        {getErr}
                    </Typo>
                )}
                <List users={users} />
                <Button
                    label={isFetching ? 'Loading...' : 'Load More'}
                    onClick={loadMore}
                    classes={{ primary: classes.loadMoreBtn }}
                />
            </div>
        </div>
    );
};

export default Home;
