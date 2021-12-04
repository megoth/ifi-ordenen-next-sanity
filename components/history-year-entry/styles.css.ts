import { globalStyle, style } from "@vanilla-extract/css";

export const yearTitleStyle = style({
  margin: 0,
});

export const yearContentStyle = style({
  display: "none",
  padding: "2em",
});

export const yearContentSelectedStyle = style({
  display: "block",
});

export const yearLinkStyle = style({
  textDecoration: "none",
});

export const yearListStyle = style({
  listStyle: "disc",
  margin: "0",
});

globalStyle(`${yearListStyle} ${yearListStyle}`, {
  margin: "0 0 0 1rem",
});
