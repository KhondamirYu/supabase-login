import React from "react";
import Link from "next/link";
export default function LinkButton({ href, label }) {
  return (
    <Link href={href} className="my-2 border p-2 cursor-pointer rounded-xl">
      {label}
    </Link>
  );
}
