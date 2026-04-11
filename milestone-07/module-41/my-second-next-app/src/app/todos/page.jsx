

const TodosPage = async () => {

    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todos = await res.json();
    console.log(todos);



    return (
        <div>
            <h3>Todos components: {todos.length} </h3>
        </div>
    );
};

export default TodosPage;