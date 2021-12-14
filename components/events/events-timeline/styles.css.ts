import { style } from "@vanilla-extract/css";
import { vars } from "../../styles.css";

export const timelineStyle = style({
  display: "flex",
  top: 0,
  selectors: {
    "&.fixed": {
      position: "fixed",
    },
  },
});

export const scrollAreaStyle = style({
  background: vars.color.grayDark,
  borderRadius: 3,
  height: "100%",
  width: 6,
});

export const draggableStyle = style({
  alignItems: "center",
  aspectRatio: "1",
  backgroundColor: vars.color.blue,
  border: 0,
  borderRadius: "50% 50% 50% 4px",
  color: vars.color.black,
  cursor: "pointer",
  display: "flex",
  fontSize: vars.fontSize.small,
  height: "3.5em",
  padding: 0,
  position: "relative",
});

export const indicatorStyle = style({
  backgroundColor: vars.color.blue,
  borderRadius: 3,
  height: "2.75rem",
  marginLeft: -6,
  position: "absolute",
  width: 6,
});

export const draggableValueStyle = style({
  opacity: 0,
  padding: "0.5em",
  position: "absolute",
  transition: "opacity 0.5s",
  selectors: {
    "&.focus": {
      opacity: 1,
    },
  },
});
