import { style } from "@vanilla-extract/css";

export const listStyle = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "1em",
  justifyContent: "flex-start",
});

export const linkStyle = style({
  textDecoration: "none",
});
