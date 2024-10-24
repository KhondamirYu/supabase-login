import React from "react";
import Image from "next/image";
export default function MiniImage({ src, alt, className, onClick }) {
  return (
    <Image
      className={`${className}`}
      width={25}
      height={25}
      src={src}
      alt={alt}
      onClick={onClick}
    />
  );
}
