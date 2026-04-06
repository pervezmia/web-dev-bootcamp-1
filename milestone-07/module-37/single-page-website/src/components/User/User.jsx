import React, { useState } from 'react';
import { Navigate, useLoaderData } from 'react-router';
import Usr from '../usr/Usr';

const User = () => {

    const users = useLoaderData();
    const {id, } = users;
    

    
    return (
        <div>
            <h3>This is users sections</h3>
            <div>
               {
                    users.map(user => <Usr key={id} user = {user}></Usr>)
               }
            </div>
            
        </div>
    );
};

export default User;