
import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      
      <h1 className="text-7xl font-bold text-gray-800 mb-4">
        404
      </h1>

      <h2 className="text-2xl font-semibold mb-2">
        Page Not Found
      </h2>

      <p className="text-gray-500 mb-6 max-w-md">
        Sorry, the page you’re looking for doesn’t exist or has been moved.
      </p>

      <Link
        href="/"
        className="bg-black text-white px-6 py-2 rounded-xl hover:bg-gray-800 transition"
      >
        Go Home
      </Link>

    </div>
  );
};

export default NotFoundPage;

