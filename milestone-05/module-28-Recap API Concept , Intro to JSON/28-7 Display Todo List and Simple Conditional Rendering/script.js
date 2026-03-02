const toDoLoad = () => {
    
}

const loadTodo = () => {
    const url = "https://jsonplaceholder.typicode.com/todos";

    fetch(url)
    .then((response) => response.json())
    .then((data) => displayTodo(data))
}

/* 
{userId: 10, id: 190, title: 'accusamus sint iusto et voluptatem exercitationem', completed: true}
*/

const displayTodo = (todos) => {

    //get todo container
    const todoContainer = document.getElementById("todo-container");
    todoContainer.innerHTML = "";
    todos.forEach(todo => {
        console.log(todo)

        const todoCard = document.createElement("div")
        todoCard.innerHTML = `
            <div class="todo-card">
            <p>${todo.completed === true ? `<i class="fa-solid fa-square-check"></i>` : `<i class="fa-regular fa-square-check"></i>`}  </p>
                <h4>${todo.title}</h4>
            </div>
        `
        todoContainer.appendChild(todoCard);
    });
}





loadTodo();