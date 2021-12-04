import React, { useContext } from "react";
import Link from "../link";
import NavigationContext from "../../contexts/navigationContext";
import { frontpageLinkStyle, headerStyle, triggerStyle } from "./styles.css";
import cn from "classnames";
import Logo from "../logo";

interface Props {
  className?: string;
}

export default function Header({ className }: Props) {
  const { isOpen, setOpen } = useContext(NavigationContext);
  return (
    <header className={cn(headerStyle, className)}>
      <Link href={"/"} className={frontpageLinkStyle}>
        <Logo />
      </Link>
      <button
        className={triggerStyle}
        type="button"
        onClick={() => setOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>Meny</span>
        <svg
          aria-hidden="true"
          focusable="false"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <g fillRule="evenodd">
            <rect width="20" height="1" x="2" y="4" />
            <rect width="20" height="1" x="2" y="11" />
            <rect width="20" height="1" x="2" y="18" />
          </g>
        </svg>
      </button>
    </header>
  );
}
