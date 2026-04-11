import React from 'react';

const FoodDetailsPage = async({params}) => {
    const {foodId} = await params;
    const res = await fetch (`https://phi-lab-server.vercel.app/api/v1/lab/foods/${foodId}`);
    const data = await res.json();
    const food = data.data;
    const {id, dish_name, } = food;
    console.log("food in the details food" ,food);
    return (
        <div>
            <h3>Show details of food : {id}</h3>
            <h2 className='text-3xl text-lime-300'>{dish_name}</h2>
        </div>
    );
};

export default FoodDetailsPage;