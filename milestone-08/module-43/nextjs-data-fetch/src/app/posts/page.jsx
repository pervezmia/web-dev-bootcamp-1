import Error from "next/error";


// const getPosts = async () => {
//     const res = await fetch ("https://jsonplaceholder.typicode.com/posts")
//     return res.json();


    
// }

const getPosts = async () => {
    const res = await fetch ("https://jsonplaceholder.typicode.com/posts")
    
    if(!res.ok){
       throw new Error ("Failed to fetch posts"); 
    }
    
    return res.json();
    
}

// const getPosts = async () => {
//     try{
//         const res = await fetch ("https://jsonplaceholder.typicode.com/posts")
//     return res.json();
//     }
//     catch (err){
//         throw new Error("Failed to fetch posts");
//     }
    
// }

const PostsPage = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const posts = await res.json();
//   console.log(posts);
const posts = await getPosts();
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <div className="card border p-10 rounded-2xl mb-4">
            <h2 className="font-bold">{post.title}</h2>
            <p>{post.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostsPage;
