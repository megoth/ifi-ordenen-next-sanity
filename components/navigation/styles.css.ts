import { globalStyle, style } from "@vanilla-extract/css";

export const navigationStyle = style({
  selectors: {
    "&.main-menu": {
      fontSize: 22,
      marginBottom: "3em",
    },
  },
});

globalStyle(`${navigationStyle} ul`, {
  textAlign: "right",
});

globalStyle(`${navigationStyle} li`, {
  margin: "1.25rem 0",
});
