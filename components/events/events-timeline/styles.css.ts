import { style } from "@vanilla-extract/css";
import { vars } from "../../styles.css";

export const timelineStyle = style({
  backgroundColor: "red",
  top: 0,
  selectors: {
    "&.fixed": {
      position: "fixed",
    },
  },
});

export const indicatorStyle = style({
  alignItems: "center",
  aspectRatio: "1",
  backgroundColor: vars.color.blue,
  borderRadius: "50% 50% 50% 4px",
  color: vars.color.black,
  display: "flex",
  fontSize: vars.fontSize.small,
});

export const indicatorValueStyle = style({
  padding: "0.5em",
});
