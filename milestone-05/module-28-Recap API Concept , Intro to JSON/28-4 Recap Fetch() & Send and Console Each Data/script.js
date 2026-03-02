const loadData = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    //promise of response
    .then((response) => response.json())
    //promise of json data
    .then((data) => console.log(data));
}

const loadPost = () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
    .then((res) => res.json())
    .then((data) => displayPost(data));
}

const displayPost = (posts) => {
    // console.log(posts);
    posts.forEach(element => {
        console.log(element);
    });
}