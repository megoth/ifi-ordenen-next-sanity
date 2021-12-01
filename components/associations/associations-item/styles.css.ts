import { style } from "@vanilla-extract/css";
import { vars } from "../../styles.css";

export const associationStyle = style({
  backgroundColor: vars.color.white,
  borderRadius: "1rem",
  color: vars.color.black,
  display: "flex",
  flexDirection: "column",
  textDecoration: "none",
});

export const logoStyle = style({
  borderRadius: "1rem 1rem 0 0",
  padding: "1rem",
});

export const textStyle = style({
  backgroundColor: vars.color.pink,
  borderRadius: "1rem",
  color: vars.color.black,
  padding: "1em 0.75em",
});

export const textHasLogoStyle = style({
  borderRadius: "0 0 1rem 1rem",
  padding: "0.5em 0.75em 1em",
});
