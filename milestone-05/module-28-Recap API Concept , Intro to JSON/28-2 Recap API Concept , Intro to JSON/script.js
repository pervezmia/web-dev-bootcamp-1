


const person = {
    name: "pervez",
    fruit: "dalim",
    dish: "halim",
    friends: ["ahmed", "kabir", "sohag"],
    money: 34000,
    isRich: false
}
console.log(person, typeof person);

//JSON --> js object with notation
//JSON .stringify


// to convert json
const personJSON = JSON.stringify(person);
console.log(personJSON, typeof personJSON);

//to convert parse
const parseJSON = JSON.parse(personJSON);
console.log(parseJSON, typeof parseJSON);