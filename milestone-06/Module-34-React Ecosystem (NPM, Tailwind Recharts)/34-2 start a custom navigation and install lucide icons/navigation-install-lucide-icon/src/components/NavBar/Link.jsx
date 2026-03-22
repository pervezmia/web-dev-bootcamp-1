import React from 'react';

const Link = ({route}) => {
    return (
        <li className='px-4 lg:mr-10 hover:bg-amber-400 rounded-2xl'>
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default Link;