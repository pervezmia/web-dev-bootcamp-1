import React from 'react';
import { useLoaderData } from 'react-router';

const PostDetails = () => {
    const post = useLoaderData();
    console.log(post);
    const {title, body} = post;
    return (
        <div style={{border: "1px solid green", borderRadius:"10px", padding:"10px"}}>
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
    );
};

export default PostDetails;