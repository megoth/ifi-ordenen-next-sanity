import { globalStyle, style } from "@vanilla-extract/css";
import { vars } from "../../../styles.css";

export const associationStyle = style({
  backgroundColor: vars.color.white,
  borderRadius: "1rem",
  color: vars.color.black,
  display: "flex",
  flexDirection: "column",
  fontSize: vars.fontSize.small,
  textDecoration: "none",
  ":focus": {
    outline: 0,
  },
  "@media": {
    "screen and (min-width: 400px)": {
      fontSize: vars.fontSize.medium,
    },
  },
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
  padding: "1rem 0.75rem",
});

globalStyle(
  `${associationStyle}:hover ${textStyle}, ${associationStyle}:focus ${textStyle}`,
  {
    backgroundColor: vars.color.red,
  }
);

export const textHasLogoStyle = style({
  borderRadius: "0 0 1rem 1rem",
  padding: "0.5rem 0.7r5em 1rem",
});
