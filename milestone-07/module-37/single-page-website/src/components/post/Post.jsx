import React from 'react';
import { Link } from 'react-router';

const Post = ({post}) => {
    const {id, title} = post;
    // console.log(post);
    return (
        <div style = {{border:"1px solid red", borderRadius:"10px", marginBottom: "10px"}}>
            <h3>{title}</h3>
            <Link to={`/posts/${id}`}>
                <button style={{padding:"10px", marginBottom:"10px", borderRadius:"10px", border:"none"}}>Show Details</button>
            </Link>
        </div>
    );
};

export default Post;