import { globalStyle, style } from "@vanilla-extract/css";
import { vars } from "../styles.css";

export const navigationStyle = style({
  selectors: {
    "&.main-menu": {
      fontSize: 22,
      marginBottom: "3em",
    },
  },
});

globalStyle(`${navigationStyle}.main-menu ul`, {
  "@media": {
    "screen and (min-height: 640px)": {
      textAlign: "right",
    },
  },
});

globalStyle(`${navigationStyle}.sub-menu ul`, {
  textAlign: "right",
});

globalStyle(`${navigationStyle} li`, {
  margin: "1.25rem 0",
});
