import { style } from "@vanilla-extract/css";
import { vars } from "../styles.css";

export const listStyle = style({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "1em",
  marginBottom: "2em",
  "@media": {
    "screen and (min-width: 640px)": {
      gridTemplateColumns: "1fr 1fr",
    },
    "screen and (min-width: 900px)": {
      gridTemplateColumns: "1fr 1fr 1fr",
    },
  },
});

export const listItemStyle = style({});

export const personLinkStyle = style({
  alignItems: "center",
  color: vars.color.black,
  display: "flex",
  gap: "1.5em",
  textDecoration: "none",
});

export const personImage = style({
  borderRadius: "50%",
  maxWidth: 75,
});

export const personName = style({
  textDecoration: "underline",
});

export const personTitle = style({
  color: vars.color.gray,
});
