import React, { use } from 'react';
import PricingCard from '../Pricing card/PricingCard';

const PricingOptions = ({pricingPromise}) => {
    const pricingData  = use(pricingPromise);
    const pricingInfo = pricingData.pricing
    console.log(pricingInfo);
    return (
        <div className=' md:flex gap-5 p-5 mx-10 rounded-2xl h-full'>
            {
                pricingInfo.map(pricing => <PricingCard 
                    key={pricing.id} 
                    pricing = {pricing}></PricingCard>)
            }
        </div>
    );
};

export default PricingOptions;