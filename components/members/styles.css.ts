import { globalStyle, style } from "@vanilla-extract/css";
import { vars } from "../styles.css";

export const listStyle = style({
  display: "grid",
  gridAutoFlow: "dense",
  gap: "1em",
  gridTemplateColumns: "1fr 1fr",
});

export const listItemStyle = style({});

export const personLinkStyle = style({
  backgroundColor: vars.color.pink,
  borderRadius: "1em",
  color: vars.color.black,
  display: "block",
  textDecoration: "none",
});

export const personImageStyle = style({
  borderRadius: "1em 1em 0 0 ",
});

export const personTextStyle = style({
  padding: "0.5em 0.75em 1em",
});

export const personNameStyle = style({
  color: vars.color.brown,
  fontSize: vars.fontSize.small,
  fontWeight: vars.fontWeight.strong,
});

export const personTitleStyle = style({
  color: vars.color.brown,
  fontSize: vars.fontSize.small,
});

export const personSelectedStyle = style({
  gridColumn: "1 / -1",
});

export const personSelectedImageStyle = style({
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  borderRadius: "1em",
  height: 280,
  width: "100%",
});

export const personSelectedDescriptionStyle = style({
  backgroundColor: vars.color.green,
  borderRadius: "1rem",
  color: vars.color.black,
  fontSize: vars.fontSize.small,
  margin: "-20% 5% 0 20%",
  padding: "1rem 2rem",
});

globalStyle(`${personSelectedDescriptionStyle} p:not(:first-child)`, {
  display: "none",
});
