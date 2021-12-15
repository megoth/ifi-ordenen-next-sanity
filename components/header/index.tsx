import React, { useContext } from "react";
import Link from "../link";
import NavigationContext from "../../contexts/navigationContext";
import {
  frontpageLinkStyle,
  headerStyle,
  triggerStyle,
  triggerTextStyle,
} from "./styles.css";
import cn from "classnames";
import Logo from "../logo";
import MenuButton from "./menu-button";

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
        <span className={triggerTextStyle}>Meny</span>
        <MenuButton open={isOpen} />
      </button>
    </header>
  );
}
