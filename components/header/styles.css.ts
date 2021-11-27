import { globalStyle, style } from "@vanilla-extract/css";
import { vars } from "../styles.css";

export const headerStyle = style({
  alignItems: "center",
  display: "flex",
  justifyContent: "space-between",
  paddingBottom: "2em",
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

const size = "32px";

globalStyle(`${triggerStyle} svg`, {
  fill: vars.color.text,
  height: size,
  paddingLeft: "0.75em",
  width: size,
});

globalStyle(`${triggerStyle}[aria-expanded='true'] rect`, {
  transform: "translateY(0) rotate(0deg)",
  transition: "transform .15s ease-in",
});

globalStyle(`${triggerStyle}[aria-expanded='true'] rect:first-child`, {
  transform: "translateY(7px) rotate(45deg)",
  transformOrigin: "12px 5px",
});

globalStyle(`${triggerStyle}[aria-expanded='true'] rect:nth-child(2)`, {
  fill: "transparent",
});

globalStyle(`${triggerStyle}[aria-expanded='true'] rect:nth-child(3)`, {
  transform: "translateY(-7px) rotate(-45deg)",
  transformOrigin: "12px 19px",
});
