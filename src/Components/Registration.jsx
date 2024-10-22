"use client";
import Input from "@/Components/Shared/Input";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { EmailSignUp } from "../../utils/service";
export default function Registration() {
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
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <h2 className="text-4xl font-bold">Please Enter your details</h2>
      <form
        action=""
        className="flex flex-col gap-2"
        onSubmit={handleSubmit}
        onChange={handleChange}
      >
        <Input variant={true} label="First Name" type="text" name="firstName" />
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
          className={` border p-1 rounded ${
            isDisabled
              ? "cursor-not-allowed filter backdrop bg-red-600"
              : "cursor-pointer bg-green-600"
          }`}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
