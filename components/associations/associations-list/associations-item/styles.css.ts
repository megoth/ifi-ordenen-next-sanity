import { globalStyle, style } from "@vanilla-extract/css";
import { vars } from "../../../styles.css";

export const associationStyle = style({
  backgroundColor: vars.color.white,
  borderRadius: "1rem",
  color: vars.color.black,
  display: "flex",
  flexDirection: "column",
  textDecoration: "none",
});

export const logoStyle = style({
  aspectRatio: "1",
  borderRadius: "1rem 1rem 0 0",
  display: "flex",
  alignItems: "center",
  padding: "1rem",
});

export const logoIsHighStyle = style({
  aspectRatio: "auto",
});

export const textStyle = style({
  backgroundColor: vars.color.pink,
  borderRadius: "1rem",
  color: vars.color.black,
  padding: "1em 0.75em",
});

globalStyle(
  `${associationStyle}:hover ${textStyle}, ${associationStyle}:focus ${textStyle}`,
  {
    backgroundColor: vars.color.red,
  }
);

export const textHasLogoStyle = style({
  borderRadius: "0 0 1rem 1rem",
  padding: "0.5em 0.75em 1em",
});
