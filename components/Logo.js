import React from "react";
import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <>
      <div className="mr-10">
        <Link href="/">
          <a>
            <Image
              width={600}
              height={200}
              className="object-contain"
              src="/khaasfood.png"
            />
          </a>
        </Link>
      </div>
    </>
  );
}

export default Logo;
