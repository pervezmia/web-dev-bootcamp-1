import Image from "next/image";
import Link from "next/link";

const FoodCard = ({ food }) => {
    console.log(food);
  const { id, category, dish_name, image_link, price, rating, alternative_names } = food;
  return (
    <div className="card bg-base-100 max-w-96 shadow-sm">
      <figure>
        {/* <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        /> */}
        <Image
            src={image_link}
            alt={dish_name}
            width={200}
            height={200}
        ></Image>
      </figure>
      <div className="card-body">
        <h2 className="card-title justify-between">
          {dish_name}
          <div className="badge badge-secondary">{category}</div>
        </h2>
        <div className="card-actions">
          <div className="badge badge-outline">${price}</div>
          <div className="badge badge-outline">Rating: {rating}</div>
        </div>
        <div>
            <h3 className="text-xs font-semibold">alternative_names of {dish_name}:</h3>
            {
                alternative_names.map((name, index) => <ul key={index} className="text-[10px] ">
                <li>{name}</li>
            </ul>)
            }
        </div>
        <div className="flex justify-between items-center">
            <Link href={`/foods/${id}`}>
            <button className="btn btn-primary btn-xs">Details Info</button>
            </Link>
            <button className="btn btn-xs btn-success">Order Now</button>

        </div>
        
      </div>
    </div>
  );
};

export default FoodCard;
