import LeftSideBar from "@/components/homepage/news/LeftSideBar";
import NewsCard from "@/components/homepage/news/NewsCard";
import RightSideBar from "@/components/homepage/news/RightSideBar";
import { getCategories, getNewsByCategoryId } from "@/lib/data";
import React from "react";

const NewsCategoryPage = async ({ params }) => {
  const { id } = await params;

  const categories = await getCategories();
  console.log(categories.news_category);

  const news = await getNewsByCategoryId(id);
  console.log(news, "news");

  const paramsRes = await params;
  console.log(paramsRes);
  return (
    <div className="grid md:grid-cols-4 gap-5 p-2 md:p-0 container mx-auto lg:max-w-[90%] my-[60px]">
      <div className="grid-cols-1">
        <LeftSideBar categories={categories} activeId={id}></LeftSideBar>
      </div>
      <div className="md:col-span-2 p-4 bg-violet-100">
        <h2 className="font-bold text-3xl">All News</h2>
        <div className="space-y-5">
          {news.length > 0 ? (
            news.map((n) => (
              <NewsCard
                key={n._id}
                className="p-6 rounded-md border"
                n = {n}
              ></NewsCard>
            ))
          ) : (
            <div className="flex items-center justify-center">
              <h3 className="font-bold text-2xl text-red-400">No News Found</h3>
            </div>
          )}
        </div>
      </div>
      <div className="grid-cols-1  ">
        <RightSideBar></RightSideBar>
      </div>
    </div>
  );
};

export default NewsCategoryPage;
