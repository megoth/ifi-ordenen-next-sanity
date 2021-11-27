import { style } from "@vanilla-extract/css";
import { vars } from "../styles.css";

export const textComponentStyle = style({
  selectors: {
    "&.large": {
      fontSize: vars.fontSize.h1,
    },
  },
});
