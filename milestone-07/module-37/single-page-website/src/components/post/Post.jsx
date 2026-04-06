import React, { Suspense, useState } from 'react';
import { data, Link, useNavigate } from 'react-router';
import PostDetails2 from '../postDetails2/PostDetails2';

const Post = ({post}) => {
    const [showInfo, setShowInfo] = useState(false);
    const {id, title} = post;
    const navigate = useNavigate();
    // console.log(post);
    const handleNavigate = () => {
        // navigate("/")
        // navigate("/mobiles")
        navigate(`/posts/${id}`);
    }

     //ai api ta change korbo
     const postPromise = fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res => res.json());
     console.log(postPromise);
    

    return (
        <div style = {{border:"1px solid red", borderRadius:"10px", marginBottom: "10px"}}>
            <h3>{title}</h3>
            <Link to={`/posts/${id}`}>
                <button style={{padding:"10px", marginBottom:"10px", borderRadius:"10px", border:"none", marginRight:"5px"}}>Show Details</button>
            </Link>
            <button onClick={handleNavigate} style={{padding:"10px", marginBottom:"10px", borderRadius:"10px", border:"none",  marginRight:"5px"}}>Details of: {id}</button>
            <button onClick={() => setShowInfo(!showInfo)} style={{padding:"10px", marginBottom:"10px", borderRadius:"10px", border:"none",  marginRight:"5px"}}>{showInfo ? "Hide" : "Show"} Info</button>
            {
                showInfo && <Suspense fallback={ <span>Loading....</span>} >
                    <PostDetails2 postPromise = {postPromise}></PostDetails2>
                </Suspense>
            }
        </div>
    );
};

export default Post;