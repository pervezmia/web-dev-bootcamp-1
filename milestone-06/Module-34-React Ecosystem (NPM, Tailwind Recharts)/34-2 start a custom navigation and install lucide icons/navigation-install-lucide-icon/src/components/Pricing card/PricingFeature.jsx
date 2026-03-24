import { Check } from "lucide-react";
import React from "react";

const PricingFeature = ({ feature }) => {
  // console.log(feature);
  return (
    <div className="flex gap-2">
      <Check></Check>
      <p> {feature}</p>
    </div>
  );
};

export default PricingFeature;
