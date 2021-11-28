import { style } from "@vanilla-extract/css";

export const listStyle = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "1em",
});

export const listItemStyle = style({
  flex: "1 1 0",
});

export const linkStyle = style({
  textDecoration: "none",
});
