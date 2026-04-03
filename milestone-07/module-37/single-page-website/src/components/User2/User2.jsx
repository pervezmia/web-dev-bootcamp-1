import React, { use } from 'react';

const User2 = ({userPromise}) => {
    const users = use(userPromise);
    console.log("user 2 suspense data load", users);
    return (
        <div>
            <h3>Hello users 22222's</h3>
        </div>
    );
};

export default User2;