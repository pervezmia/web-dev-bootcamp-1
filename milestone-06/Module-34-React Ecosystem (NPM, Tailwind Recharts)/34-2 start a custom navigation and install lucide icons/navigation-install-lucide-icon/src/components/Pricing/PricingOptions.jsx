import React, { use } from "react";
import PricingCard from "../Pricing card/PricingCard";
import DaisyPricingCard from "../daisyPricing/DaisyPricingCard";

const PricingOptions = ({ pricingPromise }) => {
  const pricingData = use(pricingPromise);
  const pricingInfo = pricingData.pricing;
  // console.log(pricingInfo);
  return (
    <div>
        <h2 className="text-5xl text-center mt-10 font-bold">Get Our Membership</h2>

      <div className=" grid md:grid-cols-3 gap-5 p-5 mx-10 rounded-2xl h-full">
        {/* {pricingInfo.map((pricing) => (
          <PricingCard key={pricing.id} pricing={pricing}></PricingCard>
        ))} */}

            {
                pricingInfo.map(pricing => <DaisyPricingCard
                key={pricing.id}
                pricing = {pricing}
                ></DaisyPricingCard>)
            }
      </div>
    </div>
  );
};

export default PricingOptions;
