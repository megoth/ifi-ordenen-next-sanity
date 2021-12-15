import React, { useContext, useEffect, useRef } from "react";
import Link from "../link";
import NavigationContext from "../../contexts/navigationContext";
import {
  headerHeight,
  headerStyle,
  triggerStyle,
  triggerTextStyle,
} from "./styles.css";
import cn from "classnames";
import Logo from "../logo";
import MenuButton from "./menu-button";
import Container from "../container";

interface Props {
  className?: string;
}

export default function Header({ className }: Props) {
  const { isOpen, setOpen } = useContext(NavigationContext);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && ref.current) {
      ref.current.style.position = "fixed";
      ref.current.style.top = "0px";
      ref.current.style.width = `${ref.current.parentElement.clientWidth}px`;
      ref.current.parentElement.style.paddingTop = `${headerHeight}px`;
    } else if (ref.current) {
      ref.current.style.removeProperty("position");
      ref.current.style.removeProperty("top");
      ref.current.style.removeProperty("width");
      ref.current.parentElement.style.removeProperty("padding-top");
    }
  }, [isOpen]);

  return (
    <Container ref={ref}>
      <header className={cn(headerStyle, className)}>
        <Link href={"/"}>
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
    </Container>
  );
}
