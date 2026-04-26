import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaEye, FaStar } from "react-icons/fa";
import { GoShareAndroid } from "react-icons/go";
import { IoBookmarkOutline } from "react-icons/io5";

const NewsCard = ({ n }) => {
  console.log(n, "news");
  return (
    <div className="">
      <div className="card bg-base-100 shadow-sm">
        <div className="card-body">
          <div className="flex items-center justify-between bg-slate-200 p-2 ">
            <div className="flex items-center gap-2.5">
              <Image
                className="rounded-full"
                src={n.author?.img}
                alt={n.title}
                height={40}
                width={40}
              ></Image>
              <div>
                <p className="font-semibold">{n.author?.name}</p>
                <p className="text-xs">{n.author?.published_date}</p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <IoBookmarkOutline />
              <GoShareAndroid />
            </div>
          </div>
          <h2 className="card-title font-bold text-xl">{n.title}</h2>

          <figure>
            <Image
              className="w-full"
              src={n.image_url}
              alt={n.title}
              height={400}
              width={300}
            ></Image>
          </figure>
          <p className="line-clamp-2">{n.details}</p>

          <div className="flex items-center justify-between">
            <div className="flex gap-2">
                <div className="flex gap-2 items-center bg-green-200 px-2 py-1 rounded">
                    <FaStar className="text-amber-400" />
                    <p className="">{n.rating.number}</p>
                </div>
                <div className="flex gap-2 items-center bg-blue-200 px-2 py-1 rounded">
                    <FaEye />
                    <p className="">{n.total_view}</p>
                </div>
            </div>
            <Link href={`/news/${n._id}`}>
                <button className="btn">See Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
