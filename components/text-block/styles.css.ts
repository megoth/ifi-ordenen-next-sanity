import { globalStyle, style } from "@vanilla-extract/css";
import { vars } from "../styles.css";

export const textBlockStyle = style({});

export const listRule = {
  listStyle: "disc",
  margin: "1rem 0",
  "@media": {
    "screen and (min-width: 640px)": {
      margin: "1rem",
    },
  },
};
globalStyle(`${textBlockStyle} ul`, listRule);

globalStyle(`${textBlockStyle} blockquote`, {
  color: vars.color.green,
  margin: "1rem",
});
