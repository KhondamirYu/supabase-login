"use client";
import { useContext, useState } from "react";
import { UserContext } from "../../app/layout";
import Link from "next/link";
import { logOut } from "../../utils/service";

export default function Navbar() {
  const { user, setUser } = useContext(UserContext);
  const [isActive, setIsActive] = useState(false);
  const handleDropdown = () => {
    setIsActive(!isActive);
  };
  return (
    <div className="flex gap-4 items-center justify-end mt-10 mr-10">
      {user?.id ? (
        <div
          on
          className="relative flex items-center gap-2 btn bg-transparent shadow-none border cursor-pointer p-1 rounded"
        >
          <span
            onClick={handleDropdown}
            className="font-inter text-black-30 text-base font-medium"
          >
            {user.user_metadata?.full_name || user.email}
          </span>
          <div
            className={`absolute top-10 right-0  gap-2 bg-white rounded-xl flex-col justify-start ${
              isActive ? "flex" : "hidden"
            }`}
          >
            <button
              onClick={async () => {
                await logOut();
                setUser(null);
              }}
              className="border p-1 rounded bg-transparent  flex items-center gap-3"
            >
              <p>Log out</p>
            </button>
          </div>
        </div>
      ) : (
        <Link
          href="/login#signIn"
          className="border rounded p-1 text-black-30 text-base font-medium"
        >
          Log in
        </Link>
      )}
    </div>
  );
}
