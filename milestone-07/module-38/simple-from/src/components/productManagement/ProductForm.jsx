import React, { useState } from 'react';

const ProductForm = ({handleAddProduct}) => {
    const [error, setError] = useState('');
    const handleProductSubmit = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        

        // console.log(name, price, quantity);

        //validation
        if(name.length <= 0){
            setError("Please provide a product name.")
            return
        } else if (price.length <= 0){
            setError('Please Provide valid price' )
            return
        }else if (quantity.length <= 0){
            setError("Please add to minimum item")
            return
        } else {
            setError("");
        }


        const newProduct = {
            name,
            price, 
            quantity
        }
        // console.log(newProduct);
        handleAddProduct(newProduct);
    }
    return (
        <div>
            <h2>Add a product</h2>
            <form onSubmit={handleProductSubmit}>
                <input type="text" name="name" placeholder='Product name' id="" />
                <br />
                <input type="text" name='price' placeholder='price' />
                <br />
                <input type="text" name='quantity' placeholder='Quantity' />
                <br />
                <input type="submit" value="Submit" />
            </form>
            <p><small style={{color: "red"}}>{error}</small></p>
        </div>
    );
};

export default ProductForm;