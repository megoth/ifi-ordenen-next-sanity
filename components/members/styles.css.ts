import { style } from "@vanilla-extract/css";
import { vars } from "../styles.css";

export const tabsStyle = style({
  display: "flex",
  marginBottom: "2rem",
});

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

export const tabLinkStyle = style({
  display: "block",
  padding: "0.5em 1em",
  textDecoration: "none",
});

export const tabLinkSelectedStyle = style({
  color: vars.color.black,
});
