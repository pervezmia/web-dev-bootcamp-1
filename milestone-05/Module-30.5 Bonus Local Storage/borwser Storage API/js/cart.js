const handleAddProducts = () => {
    const productEl = document.getElementById("product");
    const quantityEl = document.getElementById("quatity");
    const product = productEl.value;
    const quantity = quantityEl.value;
    // console.log("product add", product, quantity);

    displayProducts(product, quantity);

    addProductToCart(product, quantity);

    productEl.value = "";
    quantityEl.value = "";
}

const getCart = () => {
    let cart = {};

    const cartJSON = localStorage.getItem("cart");
    // console.log(cartJSON);
    if(cartJSON) {
        
    }



    return cart;
}

const addProductToCart = (product, quantity) => {
    const cart = getCart();
    cart[product] = quantity;
    console.log("cart", cart);

    const cartJSON = JSON.stringify(cart);
    localStorage.setItem("cart", cartJSON);
}

const displayProducts = (product, quantity) => {
    const li = document.createElement('li');
    li.innerText = `${product} : ${quantity}`

    //get the ul
    const ul = document.getElementById("products-container");
    ul.appendChild(li);
}





/* 
*** To save Object / Array in the Local Storage
*** 1.Convert the obj to JSON string by using JSON.stringify
*** 2. Localstorage.setItem()
*/


/* 
* to get obj / array  from the local storage
* 1. get the item  the from local storage and it will be in JSON string
* 2. convert the JSON  string to js object by using JSON.parse
*
*/