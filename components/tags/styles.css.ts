import { style } from "@vanilla-extract/css";
import { vars } from "../styles.css";

export const tagsStyle = style({
  display: "flex",
  gap: "0.5em",
  flexWrap: "wrap",
});

export const tagStyle = style({
  backgroundColor: vars.color.green,
  borderRadius: "1rem",
  color: vars.color.black,
  display: "block",
  fontSize: vars.fontSize.small,
  padding: "0.5em 1em",
  textDecoration: "none",
});
