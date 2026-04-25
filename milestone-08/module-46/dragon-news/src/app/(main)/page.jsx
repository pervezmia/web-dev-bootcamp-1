import LeftSideBar from "@/components/homepage/news/LeftSideBar";
import RightSideBar from "@/components/homepage/news/RightSideBar";
import { getCategories, getNewsByCategoryId } from "@/lib/data";
import { redirect } from "next/navigation";


const defaultCategory = "01"

export default async function Home() {
  // const categories = await getCategories();
  // console.log(categories.news_category);

  // const news = await getNewsByCategoryId("01");
  // console.log(news, "news");
  redirect(`/category/${defaultCategory}`);
  // return (
    // <div className="grid md:grid-cols-4 gap-5 p-2 md:p-0 container mx-auto lg:max-w-[90%] my-[60px]">
    //   <div className="grid-cols-1">
    //     <LeftSideBar categories={categories} activeId={"01"}></LeftSideBar>
    //   </div>
    //   <div className="md:col-span-2 p-4 bg-violet-100">
    //     <h2 className="font-bold text-3xl">All News</h2>
    //     <div className="space-y-5">
    //       {news.map((n) => (
    //         <div key={n._id} className="p-6 rounded-md border">
    //           <h3 className="font-bold text-lg">{n.title}</h3>
    //           <p>{n.details}</p>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    //   <div className="grid-cols-1  ">
    //     <RightSideBar></RightSideBar>
    //   </div>
    // </div>
  // );
}
