import { globalStyle, style } from "@vanilla-extract/css";
import { vars } from "../../styles.css";

export const listStyle = style({
  alignContent: "center",
  alignItems: "stretch",
  display: "flex",
  flexWrap: "wrap",
  gap: "1em",
  justifyContent: "flex-start",
});

export const listItemStyle = style({
  flex: "0 0 47%",
  height: "100%",
  margin: 0,
  "@media": {
    "screen and (min-width: 400px)": {
      flexBasis: "47.63%",
    },
    "screen and (min-width: 600px)": {
      flexBasis: "31.34%",
    },
    "screen and (min-width: 960px)": {
      flexBasis: "23.5%",
    },
  },
});

export const personLinkStyle = style({
  borderRadius: "1em",
  color: vars.color.black,
  display: "flex",
  flexDirection: "column",
  textDecoration: "none",
});

export const personImageStyle = style({
  borderRadius: "1em 1em 0 0 ",
  width: "100%",
});

export const personTextStyle = style({
  backgroundColor: vars.color.pink,
  borderRadius: "0 0 1rem 1rem",
  padding: "0.5em 0.75em 1em",
});

globalStyle(
  `${listItemStyle}:hover ${personTextStyle}, ${personLinkStyle}:focus ${personTextStyle}`,
  {
    backgroundColor: vars.color.red,
  }
);

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
  flexBasis: "99%",
  "@media": {
    "screen and (min-width: 400px)": {
      flexBasis: "98.8%",
    },
    "screen and (min-width: 600px)": {
      flexBasis: "48.3%",
    },
    "screen and (min-width: 960px)": {
      flexBasis: "49%",
    },
  },
});

export const personHiddenStyle = style({
  display: "none",
});

export const personSelectedImageStyle = style({
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  borderRadius: "1em",
  height: 280,
  position: "relative",
  width: "100%",
  "@media": {
    "screen and (min-width: 400px)": {
      height: 360,
    },
    "screen and (min-width: 600px)": {
      height: 360,
    },
  },
});

export const personSelectedCloseStyle = style({
  backgroundColor: vars.color.base,
  borderRadius: "50%",
  height: "1.5rem",
  lineHeight: "1.5rem",
  opacity: "0.75",
  position: "absolute",
  right: "1rem",
  textAlign: "center",
  textDecoration: "none",
  top: "1rem",
  width: "1.5rem",
});

export const personSelectedDescriptionStyle = style({
  backgroundColor: vars.color.green,
  borderRadius: "1rem",
  color: vars.color.black,
  fontSize: vars.fontSize.small,
  margin: "-20% 5% 0 20%",
  padding: "1rem 2rem",
  position: "relative",
  "@media": {
    "screen and (min-width: 900px)": {
      margin: "-10% 10% 0 10%",
    },
  },
});

globalStyle(`${personSelectedDescriptionStyle} p:not(:first-child)`, {
  display: "none",
});
