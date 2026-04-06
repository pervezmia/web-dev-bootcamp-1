import React from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router';

const PostDetails = () => {
    const post = useLoaderData();
    console.log(post);
    const {title, body} = post;

    const navigate = useNavigate()

    const {postId} = useParams();
    console.log(postId);

    return (
        <div style={{border: "1px solid green", borderRadius:"10px", padding:"10px"}}>
            <p>Object No. {postId}</p>
            <h2>{title}</h2>
            <p>{body}</p>
            <button onClick={() => navigate(-1)}>Go back</button>
        </div>
    );
};

export default PostDetails;