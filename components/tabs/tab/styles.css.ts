import { style } from "@vanilla-extract/css";
import { vars } from "../../styles.css";

const focusHoverRule = {
  backgroundColor: vars.color.white,
  borderColor: vars.color.white,
  color: vars.color.black,
};
export const tabLinkStyle = style({
  border: "solid 1px",
  display: "block",
  padding: "0.5em 1em",
  textDecoration: "none",
  ":first-child": {
    borderRadius: "1em 0 0 1em",
  },
  ":last-child": {
    borderRadius: "0 1em 1em 0",
  },
  ":focus": focusHoverRule,
  ":hover": focusHoverRule,
});

export const tabLinkSelectedStyle = style({
  backgroundColor: vars.color.green,
  borderColor: vars.color.green,
  color: vars.color.black,
});
