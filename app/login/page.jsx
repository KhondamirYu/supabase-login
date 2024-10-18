"use client";
import React from "react";
import { EmailLogin, GoogleSignIn } from "../../utils/service";
import Link from "next/link";
import { useRouter } from "next/navigation";
// import { login, signup } from "./actions";
export default function Login() {
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const email = formData.get("email");
    const password = formData.get("password");
    await EmailLogin(email, password);
    router.push("/");
  };
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <form
        action=""
        className="flex flex-col gap-5 items-start"
        onSubmit={handleSubmit}
      >
        <h2 className="text-3xl font-bold">Log in your details</h2>
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
            type="password"
            name="password"
            id="password"
            className="border p-1 rounded"
          />
        </div>
        <button className="rounded-lg p-2 border">Submit</button>
      </form>
      <Link href="/register" className="border p-2 cursor-pointer rounded-xl">
        Registration
      </Link>
      <div className="border-t mt-5">
        <button className="border p-2 rounded-full mt-5" onClick={GoogleSignIn}>
          Sign in with Google
        </button>
      </div>
    </div>
  );
}
