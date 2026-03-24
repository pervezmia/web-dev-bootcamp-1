import React from "react";
import PricingFeature from "./PricingFeature";

const PricingCard = ({ pricing }) => {
  // console.log(pricing);
  const { name, price, features } = pricing;
  return (
    <div className="flex flex-col mb-5 bg-gray-300 rounded-2xl text-gray-800 border-4 border-green-500 p-4">
      <div className="rounded-2xl ">
        <p className="text-3xl">{name}</p>

        <h2 className="text-1rem] lg:text-[3rem] font-bold">{price}</h2>
      </div>
      <div className="bg-gray-400 p-3 rounded-2xl mt-10 flex-1">
        <p>
          {features.map((feature, index) => (
            <PricingFeature key={index} feature={feature}></PricingFeature>
          ))}
        </p>
      </div>
      <button className="btn w-full mt-3 rounded-2xl">Subscribe</button>
    </div>
  );
};

export default PricingCard;
