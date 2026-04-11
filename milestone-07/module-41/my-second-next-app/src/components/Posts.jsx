"use client"
import { use } from "react";


const Posts = ({postsPromise}) => {
    const posts = use(postsPromise);
    console.log(posts);
    return (
        <div>
            <h2 className="text-4xl border p-4 rounded-xl">
              posts length:  {posts.length}
            </h2>
        </div>
    );
};

export default Posts;