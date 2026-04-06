import React, { useState } from 'react';
import { Link, Navigate, useLocation } from 'react-router';

const Usr = ({user}) => {
    const {id,name, email, phone} = user
    const [visitHome, SetVisitHome] = useState(false);
    const location = useLocation();
    console.log(location);


    if(visitHome){
        return <Navigate to = "/"></Navigate>
    }

    const userStyle = {
        border: "2px solid yellow",
        borderRadius: "30px",
        padding: "10px",
        margin: '10px'
    }
    return (
        <div style={userStyle}>
            <h3>{name}</h3>
            <p>Email: {email}</p>
            <p><small>Phone: {phone}</small></p>
            <Link to={`/users/${id}`}>Show Details</Link>
            <button onClick={() => SetVisitHome(true)}>Visit Home</button>
        </div>
    );
};

export default Usr;