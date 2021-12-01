import { globalStyle, style } from "@vanilla-extract/css";
import { vars } from "../styles.css";

const hoverFocusRule = {
  backgroundColor: vars.color.text,
  borderColor: vars.color.black,
  color: vars.color.black,
};
export const buttonStyle = style({
  border: "2px solid",
  borderColor: vars.color.text,
  display: "inline-block",
  padding: "1.25em 1em 1.25em 1.75em",
  textDecoration: "none",
  ":after": {
    content: "→",
    paddingLeft: "1em",
  },
  ":focus": hoverFocusRule,
  ":hover": hoverFocusRule,
  selectors: {
    "&.on-green": {
      backgroundColor: vars.color.green,
      borderColor: vars.color.green,
      color: vars.color.black,
      fontWeight: vars.fontWeight.strong,
      padding: 0,
    },
    "&.primary": {
      backgroundColor: vars.color.red,
      borderColor: vars.color.red,
      color: vars.color.black,
    },
  },
});

globalStyle(
  `${buttonStyle}.primary:focus, ${buttonStyle}.primary:hover`,
  hoverFocusRule
);
