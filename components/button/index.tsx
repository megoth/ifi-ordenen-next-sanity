import React, { HTMLAttributes, MouseEventHandler, ReactNode } from "react";
import Link, { LinkUrl } from "../link";
import cn from "classnames";
import { buttonStyle } from "./styles.css";

export type ButtonVariant = "primary" | "secondary" | "on-green";

interface Props extends Omit<HTMLAttributes<HTMLAnchorElement | HTMLButtonElement>, "href"> {
  children: ReactNode;
  className?: string;
  href?: LinkUrl;
  onClick?: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
  variant?: ButtonVariant;
}

export default function Button({
                                 children,
                                 className,
                                 href,
                                 onClick,
                                 variant,
                                 ...props
                               }: Props) {
  const style = cn(buttonStyle, variant, className);
  return href ? (
    <Link href={href} className={style} onClick={onClick} {...props}>
      {children}
    </Link>
  ) : (
    <button className={style} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
