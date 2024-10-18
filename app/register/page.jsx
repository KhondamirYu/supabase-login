"use client";
import React from "react";
import { EmailSignUp, sendUser } from "../../utils/service";
import { useRouter } from "next/navigation";

export default function Registration() {
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
  
  return (
    <div className="flex flex-col gap-2 items-center justify-center my-10">
      <h2 className="text-4xl font-bold">Please Enter your details</h2>
      <form action="" className="flex flex-col gap-2" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2 mt-10">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            className="border p-1 rounded"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            className="border p-1 rounded"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="border p-1 rounded"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password">Password</label>
          <input
            className="border p-1 rounded"
            name="password"
            type="password"
          />
        </div>

        <button className="border p-1 rounded">Submit</button>
      </form>
    </div>
  );
}
