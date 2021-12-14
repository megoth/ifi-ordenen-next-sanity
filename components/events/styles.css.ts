import { style } from "@vanilla-extract/css";

export const containerStyle = style({
  display: "flex",
  justifyContent: "space-between",
  position: "relative",
});

export const listStyle = style({
  display: "flex",
  flexDirection: "column",
  gap: "2em",
});
