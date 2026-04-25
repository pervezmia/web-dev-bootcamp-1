import Link from "next/link";
import React from "react";

const LeftSideBar = ({categories, activeId }) => {
  return (
    <div>
      <h2 className="font-bold text-lg">All categories</h2>
      <ul className="flex flex-col gap-3 mt-4">
        {categories.news_category.map((category) => (
          <div key={category.category_id}>
              <Link href={`/category/${category.category_id}`}>
            <li className={`${activeId === category.category_id && "bg-purple-400 text-white text-md"} p-2 rounded-md bg-gray-100 font-bold text-sm text-center`}>
              {category.category_name}
            </li>
              </Link>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default LeftSideBar;
