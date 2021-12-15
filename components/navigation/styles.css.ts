import { globalStyle, style } from "@vanilla-extract/css";

export const navigationStyle = style({});

globalStyle(`${navigationStyle} ul`, {
  display: "flex",
  flexDirection: "column",
  gap: "0.75rem",
  "@media": {
    "screen and (min-height: 400px)": {
      gap: "1.25rem",
    },
  },
});

globalStyle(`${navigationStyle}.main-menu`, {
  "@media": {
    "screen and (min-height: 400px)": {
      fontSize: 22,
      marginBottom: "3em",
    },
  },
});

globalStyle(`${navigationStyle}.main-menu ul`, {
  "@media": {
    "screen and (min-height: 600px)": {
      textAlign: "right",
    },
  },
});

globalStyle(`${navigationStyle}.sub-menu ul`, {
  textAlign: "right",
});
