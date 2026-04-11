import Image from "next/image";
import React from "react";

const FoodDetailsPage = async ({ params }) => {
    console.log(params);
  const { foodId } = await params;
  const res = await fetch(
    `https://phi-lab-server.vercel.app/api/v1/lab/foods/${foodId}`,
  );
  const data = await res.json();
  const food = data.data;
  const { id, dish_name, image_link, approximate_nutrition_per_serving } = food;
//   console.log("food in the details food", food);
  return (
    <div className="border p-10 rounded-2xl">
     <div className="flex items-center justify-center">
         <Image src={image_link} alt={dish_name} width={200} height={200}></Image>
     </div>
      <h3>Show details of food : {id}</h3>
      <h2 className="text-3xl text-lime-300">{dish_name}</h2>
      <p>approximate_nutrition_per_serving</p>
      <ul className="list-disc">
        {
        Object.entries(approximate_nutrition_per_serving).map(
            ([key, value]) =>  (
                <li key={key}>
                    <span className="font-semibold">{key} : </span> 
                    <span>{value}</span>
                </li>
            ))}
      </ul>
     
      {/* <ul className="list-disc text-xs"> //old model
        <li>{approximate_nutrition_per_serving.calories}</li>
        <li>{approximate_nutrition_per_serving.carbohydrates}</li>
        <li>{approximate_nutrition_per_serving.fat}</li>
        <li>{approximate_nutrition_per_serving.fiber}</li>
        <li>{approximate_nutrition_per_serving.protein}</li>
      </ul> */}
    </div>
  );
};

export default FoodDetailsPage;
