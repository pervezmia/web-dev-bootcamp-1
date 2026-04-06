import React, { use } from 'react';

const PostDetails2 = ({postPromise}) => {
    const {title, body} = use(postPromise);
    
    
    return (
        <div>
            <p><small>Title name: {title}</small></p>
            <p>{body}</p>
        </div>
    );
};

export default PostDetails2;