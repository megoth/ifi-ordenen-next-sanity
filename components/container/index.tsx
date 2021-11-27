import React, { ReactNode } from "react";
import { containerStyle } from "./styles.css";
import cn from "classnames";

interface Props {
  children: ReactNode;
  className?: string;
  variant?: "contained" | "green";
}

export default function Container({ children, className, variant }: Props) {
  return (
    <div className={cn(containerStyle, variant, className)}>{children}</div>
  );
}
