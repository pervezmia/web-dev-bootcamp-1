import React from "react";

const Product = ({product}) => {

    const {id, name, price, description, category, inStock} = product;

  return (
    <div className="card border bg-base-100 card-md shadow-sm ">
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>
          {description}
        </p>
        <div className="justify-between card-actions">
          <button className="btn btn-success">$ {price}</button>
          <button className="btn btn-primary">{category}</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
