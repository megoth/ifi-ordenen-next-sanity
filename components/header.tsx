import React from "react";
import Link from "next/link";

interface Props {
  title?: string;
}

export default function Header({ title = "[Title undefined]" }: Props) {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/">
        <a className="hover:underline">{title}</a>
      </Link>
    </h2>
  );
}
