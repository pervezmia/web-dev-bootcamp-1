import React from 'react';
import { useLoaderData } from 'react-router';
import Usr from '../usr/Usr';

const User = () => {

    const users = useLoaderData();
    console.log(users);
    return (
        <div>
            <h3>This is users sections</h3>
            <div>
               {
                    users.map(user => <Usr key={user.id} user = {user}></Usr>)
               }
            </div>
        </div>
    );
};

export default User;