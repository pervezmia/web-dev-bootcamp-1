const handleAddProducts = () => {
    const productEl = document.getElementById("product");
    const quantityEl = document.getElementById("quatity");
    const product = productEl.value; 
    const quantity = quantityEl.value;
    console.log("product add", product, quantity);

    displayProducts(product, quantity);

    productEl.value = "";
    quantityEl.value = "";
}


const displayProducts = (product, quantity) => {
    const li = document.createElement('li');
    li.innerText = `${product} : ${quantity}`

    //get the ul
    const ul = document.getElementById("products-container");
    ul.appendChild(li);
}