"use client";
import Input from "@/Components/Shared/Input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { EmailLogin, GitHubSignIN, GoogleSignIn } from "../../utils/service";
import MiniImage from "./Shared/MiniImage";
export default function LogIn({ isPage, setIsPage, className }) {
  const [isActive, setIsActive] = useState(false);
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const email = formData.get("email");
    const password = formData.get("password");
    try {
      const res = await EmailLogin(email, password);
      if (res) {
        return router.push("/");
      } else {
        alert("Wrong Password or Email");
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    }
  };
  return (
    <div
      className={`${className} absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12 sm:w-7/12 md:w-3/5 lg:w-1/2 xl:w-1/3 2xl:w-1/5 h-4/5 bg-white rounded-2xl`}
    >
      <div className="flex flex-col items-center justify-center h-full">
        <form
          action=""
          className="flex flex-col gap-5 w-full p-5"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold">
            Login
          </h2>
          <Input variant={true} label="Email" type="email" name="email" />
          <Input
            variant={false}
            label="Password"
            type={isActive ? "text" : "password"}
            name="password"
            setIsActive={setIsActive}
            isActive={isActive}
          />
        
            <Link
              href="/forgotPassword"
              className="self-end text-base text-gray-400 font-semibold hover:text-gray-600"
            >
              Forgot password?
            </Link>
          

          <button className="text-xl text-white rounded-full p-2 backgroundColor">
            Login
          </button>
        </form>
        <div className=" flex flex-col py-2">
          <h3>Or Sign Up With</h3>
          <div className="flex items-center justify-center gap-3 py-2">
            <MiniImage
              alt="google"
              src="/icons/google.svg"
              onClick={GoogleSignIn}
              className="bg-red-500 p-2.5 rounded-full w-10 h-10 cursor-pointer"
            />
            <MiniImage
              alt="google"
              src="/icons/github.svg"
              onClick={GitHubSignIN}
              className="bg-lime-400 p-2.5 rounded-full w-10 h-10 cursor-pointer"
            />
          </div>
        </div>
        <div className=" flex flex-col items-center py-2">
          <h3>Or Sign Up With Us</h3>
          <Link
            href="/login#signUp"
            className="text-base text-gray-400 font-semibold hover:text-gray-600"
            onClick={() => {
              setIsPage(isPage + 1);
            }}
          >
            Registration
          </Link>
        </div>
      </div>
    </div>
  );
}
