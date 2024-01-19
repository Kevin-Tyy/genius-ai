import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link href="/">
      <Image src="/logo/genius-ai.svg" alt="make-my-policy.co" height={100} width={100} className="w-44 min-w-44" />
    </Link>
  );
}
