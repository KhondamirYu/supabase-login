"use client";
import Navbar from "@/Components/Navbar";
import { useContext, useEffect, useState } from "react";
import { getUser } from "../utils/service";
import { UserContext } from "./layout";
export default function Home() {
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    const access = async () => {
      const user = await getUser();
      setUser(user || null);
    };
    access();
  }, []);

  return (
    <div>
      <Navbar />
      {/* <StoreItems /> */}
    </div>
  );
}
