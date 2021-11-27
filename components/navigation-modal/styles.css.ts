import { style } from "@vanilla-extract/css";
import { vars } from "../styles.css";

export const modalStyle = style({
  backgroundColor: vars.color.base,
  display: "none",
  left: 0,
  position: "fixed",
  height: "100vh",
  top: 0,
  width: "100%",
  zIndex: vars.zIndex.modal,

  selectors: {
    "&.open": {
      display: "block",
    },
  },
});

export const modalInnerStyle = style({
  padding: "2em",
  "@media": {
    "screen and (min-width: 640px)": {
      margin: "0 auto",
      padding: "2em 0 0",
      maxWidth: vars.pageWidth.medium,
    },
    "screen and (min-width: 900px)": {
      maxWidth: vars.pageWidth.large,
    },
  },
});
