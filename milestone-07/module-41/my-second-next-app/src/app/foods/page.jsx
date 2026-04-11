import FoodCard from "@/components/FoodCard";

const FoodPages = async () => {
  const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/foods");
  const data = await res.json();
  const foods = data.data;
  // console.log(foods);
  return (
    <div>
      <div className="grid grid-cols-3 gap-6">
        {foods.map((food) => (
          <FoodCard key={food.id} food={food}>

          </FoodCard>
        ))}
      </div>
    </div>
  );
};

export default FoodPages;
