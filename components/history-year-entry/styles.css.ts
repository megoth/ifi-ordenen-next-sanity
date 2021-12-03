import { globalStyle, style } from "@vanilla-extract/css";
import { listRule } from "../text-block/styles.css";

export const yearStyle = style({
  display: "none",
});

export const yearSelectedStyle = style({
  display: "block",
});

export const yearLinkStyle = style({
  textDecoration: "none",
});

export const yearListStyle = style(listRule);

globalStyle(`${yearListStyle} ${yearListStyle}`, {
  margin: "0 0 0 1rem",
});
