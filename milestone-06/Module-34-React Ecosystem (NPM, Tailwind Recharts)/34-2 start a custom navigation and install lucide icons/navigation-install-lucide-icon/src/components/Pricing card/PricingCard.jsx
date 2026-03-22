import React from "react";

const PricingCard = ({ pricing }) => {
  console.log(pricing);
  return (
    <div className="mb-5">
      <div className="border p-4 rounded-2xl">
        <p className="text-3xl">{pricing.name}</p>
        <span>
          <h2 className="text-[2rem] md:text-[4rem] font-bold">{pricing.price}</h2>
          <p >{pricing.features}</p>
        </span>
        <button></button>
        {/* <hr /> */}
        <p></p>
        <p></p>
        <div>
          <span>
            <span></span>
            <p></p>
          </span>
          <span>
            <span></span>
            <p></p>
          </span>
          <span>
            <span></span>
            <p></p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
