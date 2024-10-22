"use client";
import Input from "@/Components/Shared/Input";
import LinkButton from "@/Components/Shared/LinkButton";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { EmailLogin, GoogleSignIn } from "../../utils/service";
import Link from "next/link";

export default function LogIn() {
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
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12 sm:w-7/12 md:w-3/5 lg:w-1/2 xl:w-1/4 2xl:w-1/5 h-4/5 bg-white rounded-2xl">
      <div className="flex flex-col items-center justify-center h-full">
        <form
          action=""
          className="flex flex-col gap-5 w-full p-12"
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
          <Link href="/forgotPassword" className="self-end text-base text-gray-400">Forgot password?</Link>
          <button className="text-xl text-white rounded-full p-2 backgroundColor">
            Login
          </button>
        </form>

        <LinkButton href="/register" label="Registration" />
        <div className="border-t mt-5">
          <button
            className="border p-2 rounded-full mt-5"
            onClick={GoogleSignIn}
          >
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
}
