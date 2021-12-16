import { globalStyle, style } from "@vanilla-extract/css";
import { vars } from "../styles.css";
import { arrowStyle } from "../arrow/styles.css";

export const buttonStyle = style({
  alignItems: "center",
  border: "2px solid",
  borderColor: vars.color.text,
  color: "inherit",
  cursor: "pointer",
  display: "flex",
  font: "inherit",
  textAlign: "inherit",
  textDecoration: "none",
  selectors: {
    "&.on-green": {
      backgroundColor: vars.color.green,
      borderColor: vars.color.green,
      color: vars.color.black,
      fontWeight: vars.fontWeight.strong,
      padding: 0,
    },
    "&.primary": {
      backgroundColor: vars.color.pink,
      borderColor: vars.color.pink,
      color: vars.color.black,
      padding: "1.25em 1em 1.25em 1.75em",
    },
    "&.secondary": {
      padding: "1.25em 1em 1.25em 1.75em",
    },
  },
});

globalStyle(
  [`${buttonStyle}.primary:focus`, `${buttonStyle}.primary:hover`].join(", "),
  {
    backgroundColor: vars.color.red,
    borderColor: vars.color.red,
  }
);

globalStyle(
  [`${buttonStyle}.secondary:focus`, `${buttonStyle}.secondary:hover`].join(
    ", "
  ),
  {
    backgroundColor: vars.color.text,
    borderColor: vars.color.text,
    color: vars.color.black,
  }
);

globalStyle(`${buttonStyle}.secondary ${arrowStyle} path`, {
  fill: vars.color.text,
});
globalStyle(
  [
    `${buttonStyle}.secondary:focus ${arrowStyle} path`,
    `${buttonStyle}.secondary:hover ${arrowStyle} path`,
  ].join(", "),
  {
    fill: vars.color.black,
  }
);
