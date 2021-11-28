import React from "react";
import { tagsStyle, tagStyle } from "./styles.css";
import Link from "../link";

interface Props {
  tags: Record<string, string>;
}

export default function Tags({ tags }: Props) {
  return (
    <ul className={tagsStyle}>
      {Object.entries(tags).map(([href, text]) => (
        <li key={href}>
          <Link href={href} className={tagStyle}>
            {text}
          </Link>
        </li>
      ))}
    </ul>
  );
}
