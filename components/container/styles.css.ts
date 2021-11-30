import { globalStyle, style } from "@vanilla-extract/css";
import { vars } from "../styles.css";

export const containerStyle = style({
  selectors: {
    "&.green": {
      backgroundColor: vars.color.green,
      color: vars.color.black,
      marginTop: "4em",
      marginBottom: "3em",
      overflow: "auto",
      paddingTop: "2em",
      paddingBottom: "3em",
    },
  },
});

globalStyle(`${containerStyle}.green a`, {
  color: vars.color.black,
});

export const innerStyle = style({
  padding: "0 2rem",
  selectors: {
    "&.contained": {
      overflow: "auto",
    },
  },
  "@media": {
    "screen and (min-width: 640px)": {
      margin: "0 auto",
      padding: 0,
      maxWidth: vars.pageWidth.medium,
    },
    "screen and (min-width: 900px)": {
      maxWidth: vars.pageWidth.large,
    },
  },
});
