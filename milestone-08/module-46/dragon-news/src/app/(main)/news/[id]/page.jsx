import { getNewsByNewsId } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaEye, FaStar } from 'react-icons/fa';
import { GoShareAndroid } from 'react-icons/go';
import { IoMdArrowRoundForward } from 'react-icons/io';
import { IoBookmarkOutline } from 'react-icons/io5';

export const generateMetadata = async ({params}) => {
  const {id} = await params;
  // console.log(id);

  const n = await getNewsByNewsId(id);
  return {
    title: n.title,
    description: n.details
  }


}

const DynamicNewsPage = async ({params}) => {
    const {id} = await params
    console.log(id);

    const n = await getNewsByNewsId(id);
    console.log(n);

    return (
        <div className="max-w-5xl mx-auto">
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
          <p className="">{n.details}</p>

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
            <Link href={`/category/${n.category_id}`}>
                <button className="btn">  All news in this category <IoMdArrowRoundForward /></button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    );
};

export default DynamicNewsPage;