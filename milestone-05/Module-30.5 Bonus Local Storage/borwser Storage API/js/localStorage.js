const addNUmberToLs = () => {
    const number = Math.ceil(Math.random()*100);
    console.log(number);
    localStorage.setItem("Number",number);
}
const setObjectItem = () => {
    const customer = {name: "abdur rohim", products: 4, price: 45};
    const customerJSON = JSON.stringify(customer);
    localStorage.setItem("customer", customerJSON);

}

const readObjectFromLS = () => {
    const customerJSON = localStorage.getItem("customer");
    const customerObj = JSON.parse(customerJSON);
    console.log(customerObj.name);

}

const getNumberFromLS = () => {
    const number = localStorage.getItem("Number");
    console.log("From saved local storage",number);
}
