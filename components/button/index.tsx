import React, { ReactNode } from "react";
import Link from "../link";
import cn from "classnames";
import { buttonStyle } from "./styles.css";

interface Props {
  children: ReactNode;
  className?: string;
  href?: string;
  variant?: "primary" | "on-green";
}

export default function Button({ children, className, href, variant }: Props) {
  const style = cn(className, buttonStyle, variant);
  return href ? (
    <Link href={href} className={style}>
      {children}
    </Link>
  ) : (
    <button className={style}>{children}</button>
  );
}
