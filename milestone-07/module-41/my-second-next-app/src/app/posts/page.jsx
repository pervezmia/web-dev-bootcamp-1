import Posts from "@/components/Posts";
import { Suspense } from "react";


const PostPage = () => {


    const postsPromise = fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json());
    // console.log(postsPromise);





    return (
        <div>
            <Suspense fallback = {<h2>Loading...</h2>}>
                <Posts postsPromise = {postsPromise}></Posts>
            </Suspense>
        </div>
    );
};

export default PostPage;