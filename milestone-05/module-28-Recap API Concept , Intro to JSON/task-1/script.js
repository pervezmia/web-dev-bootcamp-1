const loadComment = () => {
    const url = "https://jsonplaceholder.typicode.com/comments"

    fetch(url)
        .then((response) => response.json())
        .then((data) => displayComments(data));
}

/* 
{postId: 91, id: 454, name: 'magni quos voluptatibus earum et inventore suscipit', email: 'Reinhold.Schiller@kelly.info', body: 'consequatur accusamus maiores dolorem impedit repe…ibus dignissimos consequatur iusto nihil possimus'}
*/

const displayComments = (comments) => {

    //get display container
    const commentContainer = document.getElementById("comment-container");
    commentContainer.innerHTML = "";

    comments.forEach(comment => {
        const div = document.createElement("div");
        // li.innerText = comment.name;
        div.innerHTML = `
            <div class="comment">
                <h1>${comment.name}</h1>
                <p>${comment.body}</p>
                <p>${comment.email}</p>

            </div>
        
        `
        console.log(div);
        commentContainer.appendChild(div);

    });
}

loadComment();