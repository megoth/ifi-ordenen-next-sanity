import React from "react";

interface Props {
  title?: string;
  description?: string;
}

export default function Intro({
  title = "[Title undefined]",
  description = "[Description undefined]",
}: Props) {
  return (
    <section className="mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        {title}
      </h1>
      <p>{description}</p>
    </section>
  );
}
