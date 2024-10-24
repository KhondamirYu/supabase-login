"use client";
import Input from "@/Components/Shared/Input";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { EmailSignUp } from "../../utils/service";
import LinkButton from "./Shared/LinkButton";
import Link from "next/link";
export default function Registration({ isPage, setIsPage, className }) {
  const [isDisabled, setIsDisabled] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const fullName = `${firstName} ${lastName}`;
    const email = formData.get("email");
    const password = formData.get("password");
    await EmailSignUp(fullName, email, password);
    router.push("/login");
  };
  const handleChange = (e) => {
    const formData = new FormData(e.target.form);
    const values = Array.from(formData.values());

    const allFilled = values.every((value) => value.trim() !== "");
    if (allFilled) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  return (
    <div
      className={`${className} absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12 sm:w-7/12 md:w-3/5 lg:w-1/2 xl:w-1/3 2xl:w-1/5 h-4/5 bg-white rounded-2xl`}
    >
      <div className="flex-col items-center justify-center">
        <h2 className="text-4xl font-bold mb-5">Sign Up</h2>
        <form
          action=""
          className="flex flex-col gap-2 py-5"
          onSubmit={handleSubmit}
          onChange={handleChange}
        >
          <Input
            variant={true}
            label="First Name"
            type="text"
            name="firstName"
          />
          <Input variant={true} label="Last Name" type="text" name="lastName" />
          <Input variant={true} label="Email" type="email" name="email" />
          <Input
            variant={false}
            label="Password"
            type={isActive ? "text" : "password"}
            name="password"
            setIsActive={setIsActive}
            isActive={isActive}
          />

          <button
            disabled={isDisabled}
            className={` border p-1 rounded-full text-white font-medium backgroundColor mt-5 ${
              isDisabled ? "cursor-not-allowed" : "cursor-pointer"
            }`}
          >
            Submit
          </button>
        </form>
        <div className=" flex flex-col items-center py-2">
          <h3>Or Already have an account?</h3>
          <Link
            href="/login#signIn"
            className="text-base text-gray-400 font-semibold hover:text-gray-600"
            onClick={() => {
              setIsPage(isPage - 1);
            }}
          >
            LogIn
          </Link>
        </div>
      </div>
    </div>
  );
}
