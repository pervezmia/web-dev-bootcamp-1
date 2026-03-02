


const loadPost = () => {
    const url = "https://jsonplaceholder.typicode.com/posts"
    fetch(url)
    .then((response) => response.json())
    .then((data) => displayPost(data))
}

const displayPost = (posts) => {

    //1. get the container and empty the container
    const postContainer = document.getElementById("post-container");
    postContainer.innerHTML = "";
   
    posts.forEach(post => {
    //     const li = document.createElement("li");
    //     li.innerText = post.title;
    // postContainer.appendChild(li);

    //2. create element
    
    const postCard = document.createElement("div");
    postCard.innerHTML = `
        <div class="post-card">
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        </div>
    `
    //3. add to the container
    postContainer.appendChild(postCard);


    });
}
loadPost(); //btn a click na kore browser a dekhte chaile loadPost() function ta k sob shes a call kore dite hobe..