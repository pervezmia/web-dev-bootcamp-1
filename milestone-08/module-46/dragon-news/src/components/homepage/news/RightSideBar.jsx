import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';

const RightSideBar = () => {
    return (
        <div>
            <h2 className="font-bold text-2xl">Social Links</h2>
        <div className="space-y-4 mt-5">
          <Link
            className="flex items-center text-center border border-gray-600 rounded-lg text-lg justify-center gap-1.5"
            href={"/"}
          >
            <FaGoogle /> Login with Google
          </Link>
          <Link
            className="flex items-center text-center border border-gray-600 rounded-lg text-lg justify-center gap-1.5"
            href={"/"}
          >
            <FaGithub /> Login with Github
          </Link>
        </div>

        <div className="mt-10 ">
          <h2 className="font-semibold text-lg">Find Us On</h2>
          <div className="border border-gray-500  bg-white mt-5">
            <Link
              className="flex items-center border-b text-lg p-3 gap-1.5"
              href={"/"}
            >
              <FaFacebook /> Facebook
            </Link>
            <Link
              className="flex items-center border-b text-lg p-3  gap-1.5"
              href={"/"}
            >
              <FaTwitter /> Twitter
            </Link>
            <Link
              className="flex items-center border-gray-600 p-3 text-lg gap-1.5"
              href={"/"}
            >
              <FaInstagram /> Instagram
            </Link>
          </div>
        </div>
        </div>
    );
};

export default RightSideBar;