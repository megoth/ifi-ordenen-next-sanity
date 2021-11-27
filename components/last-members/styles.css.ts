import { style } from "@vanilla-extract/css";
import { vars } from "../styles.css";

export const listStyle = style({
  display: "flex",
  flexDirection: "column",
  gap: "1em",
});

export const listItemStyle = style({
  alignItems: "center",
  display: "flex",
  gap: "1.5em",
});

export const personImage = style({
  borderRadius: "50%",
});

export const personName = style({
  color: vars.color.black,
});

export const personTitle = style({
  color: vars.color.gray,
});
