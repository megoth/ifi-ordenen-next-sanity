import { style } from "@vanilla-extract/css";
import { vars } from "../styles.css";

export const headerHeight = 130;

export const headerStyle = style({
  alignItems: "center",
  background: vars.color.base,
  display: "flex",
  height: headerHeight,
  padding: 0,
  justifyContent: "space-between",
});

export const triggerStyle = style({
  alignItems: "center",
  background: "transparent",
  border: 0,
  color: vars.color.text,
  cursor: "pointer",
  display: "flex",
  fontSize: 12,
  outline: 0,
  padding: 0,
  textTransform: "uppercase",
});
export const triggerTextStyle = style({
  marginRight: "0.5rem",
});
