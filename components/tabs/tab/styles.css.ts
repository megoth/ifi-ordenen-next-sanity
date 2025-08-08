import { style } from "@vanilla-extract/css";
import { vars } from "../../styles.css";

export const tabStyle = style({
  border: "solid 2px",
  borderColor: vars.color.gray,
  color: vars.color.gray,
  display: "block",
  padding: "0.5em 1em",
  textDecoration: "none",
  ":first-child": {
    borderRadius: "1em 0 0 1em",
    borderRightWidth: 0,
  },
  ":last-child": {
    borderRadius: "0 1em 1em 0",
    borderLeftWidth: 0,
  },
});

const focusHoverRule = {
  borderColor: vars.color.text,
  color: vars.color.text,
};
export const tabLinkStyle = style({
  ":hover": focusHoverRule,
});

export const tabLinkSelectedStyle = style({
  borderColor: vars.color.text,
  color: vars.color.text,
  ":focus": focusHoverRule,
  ":first-child": {
    borderRightWidth: 2,
  },
  ":last-child": {
    borderLeftWidth: 2,
  },
});
