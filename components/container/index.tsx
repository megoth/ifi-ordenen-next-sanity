import React, { forwardRef, ReactNode } from "react";
import { containerStyle, innerStyle } from "./styles.css";
import cn from "classnames";

interface Props {
  children: ReactNode;
  className?: string;
  id?: string;
  variant?: "brown" | "green";
}

const Container = forwardRef<HTMLDivElement, Props>(
  ({ children, className, variant, ...props }, ref) => (
    <div className={cn(containerStyle, variant)} ref={ref} {...props}>
      <div className={cn(innerStyle, className)}>{children}</div>
    </div>
  )
);

export default Container;
