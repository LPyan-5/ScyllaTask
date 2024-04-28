import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import User from '../../components/User';

const UserPage = () => {
    const { id } = useParams();
    const users = JSON.parse(localStorage.getItem('users'));

    const user = useMemo(() => {
        return users.find((el) => el.id.value === id);
    }, [id, users]);

    return <User user={user} />;
};

export default UserPage;
