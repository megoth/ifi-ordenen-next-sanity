import { globalStyle, style } from "@vanilla-extract/css";
import { vars } from "../../styles.css";

// taken from https://codepen.io/designcouch/pen/Atyop
export const menuButtonStyle = style({
  width: 30,
  height: 22.5,
  position: "relative",
  transform: "rotate(0deg)",
  transition: ".5s ease-in-out",
});
globalStyle(`${menuButtonStyle} span`, {
  display: "block",
  position: "absolute",
  height: 4,
  width: "100%",
  background: vars.color.text,
  borderRadius: 4,
  opacity: 1,
  left: 0,
  transform: "rotate(0deg)",
  transition: ".25s ease-in-out",
});
globalStyle(`${menuButtonStyle} span:nth-child(1)`, {
  top: 0,
  transformOrigin: "left center",
});
globalStyle(`${menuButtonStyle} span:nth-child(2)`, {
  top: 9,
  transformOrigin: "left center",
});
globalStyle(`${menuButtonStyle} span:nth-child(3)`, {
  top: 18,
  transformOrigin: "left center",
});

globalStyle(`${menuButtonStyle}.open span:nth-child(1)`, {
  transform: "rotate(45deg)",
  top: -1.5,
  left: 4,
});
globalStyle(`${menuButtonStyle}.open span:nth-child(2)`, {
  width: "0%",
  opacity: 0,
});
globalStyle(`${menuButtonStyle}.open span:nth-child(3)`, {
  transform: "rotate(-45deg)",
  top: 19.5,
  left: 4,
});
