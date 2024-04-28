import React from 'react';
import ListItem from '../ListItem';
import classes from './list.module.css';

const List = ({ users }) => {
    return (
        <div className={classes.root}>
            {users.length
                ? users.map((user) => (
                      <ListItem key={user.login.uuid} user={user} />
                  ))
                : null}
        </div>
    );
};

export default List;
