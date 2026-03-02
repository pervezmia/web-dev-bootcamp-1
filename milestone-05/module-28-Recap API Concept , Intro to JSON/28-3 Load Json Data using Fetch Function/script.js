//fetch kono data return kore na she shudu amake bole j aktu wait koro ami tomake dibo
// const result = 



// .then((response) => response.json())
// .then((data) => console.log(data));

// console.log(result);

const loadData = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then((response) => response.json())
        .then((data) => console.log(data));
}