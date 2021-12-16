import React, { useCallback, useEffect, useState } from 'react';
import classes from './home.module.css';
import axios from 'axios';
import Typo from '../UI/Typo';
import Button from '../Button';
import List from '../List';

const Home = () => {
    const [users, setUsers] = useState([]);
    const [getErr, setGetErr] = useState("");
    const [isFetching, setIsFetching] = useState(false);
    const [page, setPage] = useState(0);
    
    const handleFetchUsers = useCallback(async () => {
        try {
            setIsFetching(true);
            const response = await axios.get(
                `https://randomuser.me/api/?page=${page}&results=10`
            );
            setUsers([...users, ...response.data.results]);
            setGetErr('');
        } catch (error) {
            setGetErr('Error while loading data. Try again later.') ;           
        } finally {
            setIsFetching(false);
        }
    }, [users, page]);

    const loadMore = useCallback(() => {
        setPage(page + 1);
    }, [page]);

    useEffect(() => {
        handleFetchUsers();
    }, []);

    useEffect(() => {
        handleFetchUsers();
    }, [page]);

    return (
        <div className={classes.root}>
            <Typo variant="title" font="bold" color="secondary">List of users</Typo>
            <div className={classes.content}>
                {getErr && <Typo variant="p" font="medium" color="secondary">{getErr}</Typo>}
                <List users={users}/>
                <Button
                    label={isFetching ? 'Loading...' : 'Load More'}
                    onClick={loadMore}
                    classes={{primary: classes.loadMoreBtn}}
                />
            </div>
        </div>
    );
};

export default Home;