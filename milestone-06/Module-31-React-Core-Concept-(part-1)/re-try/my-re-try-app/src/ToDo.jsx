//**** props style ****/
// export default function ToDo (props) {
    //      props.task = "js"
    //     return (
    //          <li> Task: {props.task} </li>
    //     )
 // }


        //**** destructuring style ****/
// export default function ToDo ({task, isDone}) {
    
//     return (
//         <li> Task: {task} {}</li>
//     )
// }

// export default function ToDo ({task, isDone}) {
//     if(isDone) {
//         return <li>Done: {task}</li>
//     }  
//     else {
//         return <li>Pending:{task}</li>
//     }
// }
// export default function ToDo ({task, isDone, time=0}) {

    

//     if(isDone) {
//         return <li>Done: {task} Duration: {time}</li>
//     }  
//     return <li>To be Done: {task} Duration: {time}</li>
// }



//conditional rendering : 3 ternary

//condition? true : false
// export default function ToDo ({task, isDone, time=0}) {
    
//     return isDone ? <li>Done: {task} Duration: {time} </li> : <li>Not Done: {task}</li>
// }

//conditional rendering : 4 &&

// export default function ToDo ({task, isDone, time = 0}) {
//     return isDone && <li>Done task: {task} Time: {time}</li>
// }

//conditional rendering : 4 ||
// export default function ToDo ({task, isDone, time=0}) {
//     return isDone || <li>Done task: {task} time: {time}</li>
// }

//conditional rendering : 6 ||

export default function ToDo ({task, isDone, time}) {
    const displayTime = time? time : 100;
    let listItem ;
    if(isDone) {
        listItem = <li> Done: {task} time: {time? "I am done" : "not done yet"}</li>
    }  
    else {
        listItem = <li>Pending:{task}</li>
    }
    return listItem;
}