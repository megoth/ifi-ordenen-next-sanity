import { globalStyle, style } from "@vanilla-extract/css";
import { vars } from "../styles.css";

export const textBlockStyle = style({});

globalStyle(`${textBlockStyle} ul`, {
  listStyle: "disc",
  margin: "1rem 0",
});

globalStyle(`${textBlockStyle} blockquote`, {
  color: vars.color.green,
});
