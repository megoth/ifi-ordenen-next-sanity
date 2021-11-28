import { globalStyle, style } from "@vanilla-extract/css";

export const listStyle = style({
  listStyle: "disc",
  margin: "1rem 0",
});

globalStyle(`${listStyle} ${listStyle}`, {
  margin: "0 0 0 1.25rem",
});
