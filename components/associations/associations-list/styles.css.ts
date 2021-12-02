import { globalStyle, style } from "@vanilla-extract/css";

export const masonryStyle = style({
  display: "flex",
  marginLeft: "-1em",
  width: "auto",
});

export const masonryGridColumnStyle = style({
  paddingLeft: "1em",
  backgroundClip: "padding-box",
});

globalStyle(`${masonryGridColumnStyle} > div`, {
  marginBottom: "1em",
});
