const loadPost = () => {
    const url = "https://jsonplaceholder.typicode.com/posts";

    fetch(url)
    .then((response) => response.json())
    .then((data) => displayPost(data));
}

const displayPost = (posts) => {

    //get the container
    const postContainer = document.getElementById("post-container");
    postContainer.innerText = "";

    //*** iteration by foreach loop ***/

    posts.forEach(post => {
        
        //create html element
        const li = document.createElement('li');
        li.innerText = post.title;
        
        postContainer.appendChild(li);
    });

    }