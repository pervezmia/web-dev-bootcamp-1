"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

const SignInPage = () => {
  const [seePassword, setSeePassword] = useState(true);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const loginHandle = (data) => {
    // e.preventDefault();
    // const mail = e.target.email.value;
    // const password = e.target.password.value;
    // console.log(mail, password);
    console.log(data);
  };
  console.log(errors);
  return (
    <div className="container  mx-auto bg-slate-100 min-h-[80vh] flex justify-center items-center">
      <div className="p-10 rounded-xl bg-white">
        <h2 className="font-bold mb-6">Login your account</h2>
        <form className="space-y-3.5" onSubmit={handleSubmit(loginHandle)}>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email</legend>
            <input
              type="email"
              className="input"
              placeholder="Type here email"
              defaultValue="test"
              {...register("email")}
            />
          </fieldset>


          <fieldset className="fieldset relative">
            <legend className="fieldset-legend">Password</legend>
            <input
              type={seePassword ? "text" : "password"}
              className="input"
              placeholder="Type here password"
              defaultValue="test"
              {...register("password", { required: "Password field is required" })}
              />
              <span className="absolute top-4.5 right-4 cursor-pointer" onClick={() => setSeePassword(!seePassword)}>{seePassword ? <IoMdEye /> : <IoMdEyeOff />}</span>
          {errors.password && <span className="text-red-600">{errors.password.message}</span>}
          </fieldset>

          <button className="btn w-full bg-gray-700 text-white">Login</button>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
