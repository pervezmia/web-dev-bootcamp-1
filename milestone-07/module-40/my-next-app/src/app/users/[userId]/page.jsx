import React from "react";

const DynamicUserInfo = async ({ params }) => {
  const { userId } = await params;

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
  );
  const user = await res.json();
  // console.log("user id",userId);
  console.log("user id", user);
  return (
    <div>
      <p>dynamic user info is in this page</p>
      <div className="bg-green-300 p-5 rounded-3xl max-w-70 text-xs text-violet-500 font-semibold">
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
      </div>
    </div>
  );
};

export default DynamicUserInfo;
