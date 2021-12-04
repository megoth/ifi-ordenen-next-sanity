import { globalStyle, style } from "@vanilla-extract/css";
import { vars } from "../../styles.css";

export const tabStyle = style({
  border: "solid 1px",
  ":first-child": {
    borderRadius: "1em 0 0 1em",
  },
  ":last-child": {
    borderRadius: "0 1em 1em 0",
  },
});

export const tabSelectedStyle = style({
  backgroundColor: vars.color.green,
});

const focusHoverRule = {
  backgroundColor: vars.color.white,
  color: vars.color.black,
};
export const tabLinkStyle = style({
  border: 0,
  display: "block",
  padding: "0.5em 1em",
  textDecoration: "none",
  ":focus": focusHoverRule,
  ":hover": focusHoverRule,
});
globalStyle(`${tabStyle}:first-child ${tabLinkStyle}`, {
  borderRadius: "1em 0 0 1em",
});
globalStyle(`${tabStyle}:last-child ${tabLinkStyle}`, {
  borderRadius: "0 1em 1em 0",
});

export const tabLinkSelectedStyle = style({
  color: vars.color.black,
});
