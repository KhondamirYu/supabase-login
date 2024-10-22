import React from "react";
import Image from "next/image";
export default function MiniImage({ src, alt }) {
  return (
    <div>
      <Image width={25} height={25} src={src} alt={alt} />
    </div>
  );
}
