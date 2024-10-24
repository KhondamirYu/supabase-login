"use client";
import LogIn from "@/Components/Login";
import Registration from "@/Components/Registration";
import { useState } from "react";

export default function Login() {
  const [isPage, setIsPage] = useState(1);

  return (
    <div className="relative backgroundImage w-screen h-screen">
      {isPage === 1 && (
        <LogIn
          id="signIn"
          isPage={isPage}
          setIsPage={setIsPage}
          className="flex justify-center items-center"
        />
      )}
      {isPage === 2 && (
        <Registration
          id="signUp"
          isPage={isPage}
          setIsPage={setIsPage}
          className="flex justify-center items-center"
        />
      )}
    </div>
  );
}
