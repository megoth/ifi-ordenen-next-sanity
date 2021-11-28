import { style } from "@vanilla-extract/css";
import { vars } from "../styles.css";

export const titleStyle = style({
  fontSize: 18,
});

export const imageStyle = style({
  borderRadius: "1em",
  maxWidth: "60%",
});

export const reasonStyle = style({
  fontWeight: vars.fontWeight.strong,
});
