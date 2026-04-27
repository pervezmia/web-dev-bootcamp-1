"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

const SignUpPage = () => {
  const [seePassword, setSeePassword] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const loginHandle = async (data) => {
    console.log(data);
    const {name, email, photo, password} = data;
    console.log(email, photo);

    const {data: res, error} = await authClient.signUp.email({
        Name: name,
        Email: email,
        Password: password,
        Photo: photo,
        callbackURL: "/",
    })

    console.log(res, error);
  };
  console.log(errors);

  return (
    <div className="container  mx-auto bg-slate-100 min-h-[80vh] flex justify-center items-center">
      <div className="p-10 rounded-xl bg-white">
        <h2 className="font-bold mb-6">Login your account</h2>
        <form className="space-y-3.5" onSubmit={handleSubmit(loginHandle)}>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Your Name</legend>
            <input
              type="text"
              className="input"
              placeholder="Type here name"
              {...register("name", { required: "Name field is required" })}
            />
            {errors.name && (
              <span className="text-red-600">{errors.name.message}</span>
            )}
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Photo URL</legend>
            <input
              type="text"
              className="input"
              placeholder="Type here email"
              {...register("photo", { required: "URL field is required" })}
            />
            {errors.photo && (
              <span className="text-red-600">{errors.photo.message}</span>
            )}
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email</legend>
            <input
              type="email"
              className="input"
              placeholder="Type here email"
              {...register("email", { required: "Email field is required" })}
            />
            {errors.email && (
              <span className="text-red-600">{errors.email.message}</span>
            )}
          </fieldset>

          <fieldset className="fieldset relative">
            <legend className="fieldset-legend">Password</legend>
            <input
              type={seePassword ? "text" : "password"}
              className="input"
              placeholder="Type here password"
              {...register("password", {
                required: "Password field is required",
              })}
            />
            <span
              className="absolute top-4.5 right-4 cursor-pointer"
              onClick={() => setSeePassword(!seePassword)}
            >
              {seePassword ? <IoMdEye /> : <IoMdEyeOff />}
            </span>
            {errors.password && (
              <span className="text-red-600">{errors.password.message}</span>
            )}
          </fieldset>

          <button className="btn w-full bg-gray-700 text-white">Sign Up</button>
        </form>
        <p className="text-xs">
          Already have an account?  {""}
          <Link href={"/signin"} className="text-blue-500">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
