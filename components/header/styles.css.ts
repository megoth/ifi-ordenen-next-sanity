import { globalStyle, style } from "@vanilla-extract/css";
import { vars } from "../styles.css";

export const headerStyle = style({
  alignItems: "center",
  display: "flex",
  justifyContent: "space-between",
  paddingBottom: "2em",
});

export const frontpageLinkStyle = style({});

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
