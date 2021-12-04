import { globalStyle, style } from "@vanilla-extract/css";
import { vars } from "../styles.css";

const hoverFocusRule = {
  backgroundColor: vars.color.text,
  borderColor: vars.color.black,
  color: vars.color.black,
};
const arrowRule = {
  content: "→",
  paddingLeft: "1em",
};
export const buttonStyle = style({
  border: "2px solid",
  borderColor: vars.color.text,
  textDecoration: "none",
  selectors: {
    "&.on-green": {
      backgroundColor: vars.color.green,
      borderColor: vars.color.green,
      color: vars.color.black,
      display: "inline-block",
      fontWeight: vars.fontWeight.strong,
      padding: 0,
    },
    "&.on-green:after": arrowRule,
    "&.primary": {
      backgroundColor: vars.color.red,
      borderColor: vars.color.red,
      color: vars.color.black,
      display: "inline-block",
      padding: "1.25em 1em 1.25em 1.75em",
    },
    "&.primary:after": arrowRule,
    "&.secondary": {
      display: "inline-block",
      padding: "1.25em 1em 1.25em 1.75em",
    },
    "&.secondary:after": arrowRule,
    "&.transparent": {
      backgroundColor: "transparent",
      border: 0,
      color: "inherit",
      cursor: "pointer",
      font: "inherit",
      padding: 0,
      textAlign: "inherit",
    },
  },
});

globalStyle(
  [
    `${buttonStyle}.primary:focus`,
    `${buttonStyle}.primary:hover`,
    `${buttonStyle}.primary:focus`,
    `${buttonStyle}.primary:hover`,
    `${buttonStyle}.secondary:focus`,
    `${buttonStyle}.secondary:hover`,
  ].join(", "),
  hoverFocusRule
);
