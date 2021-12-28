import { globalStyle, style } from "@vanilla-extract/css";
import { vars } from "../../../styles.css";

export const listItemStyle = style({
  flex: "0 0 47%",
  height: "100%",
  margin: 0,
  "@media": {
    "screen and (min-width: 400px)": {
      flexBasis: "47.63%",
    },
    "screen and (min-width: 600px)": {
      flexBasis: "21.5%",
    },
    "screen and (min-width: 960px)": {
      flexBasis: "23.5%",
    },
  },
});
export const personButtonStyle = style({
  alignItems: "stretch",
  backgroundColor: "transparent",
  border: 0,
  borderRadius: "1rem",
  color: vars.color.black,
  display: "flex",
  flexDirection: "column",
  padding: 0,
  textDecoration: "none",
  ":focus": {
    outline: 0,
  },
});
export const personImageStyle = style({
  borderRadius: "1rem 1rem 0 0 ",
  width: "100%",
});
export const personTextStyle = style({
  backgroundColor: vars.color.pink,
  borderRadius: "0 0 1rem 1rem",
  color: vars.color.brown,
  fontSize: vars.fontSize.small,
  padding: "0.5rem 0.75rem 1rem",
});
export const personNameStyle = style({
  fontWeight: vars.fontWeight.strong,
});
export const personTitleStyle = style({});
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
  borderRadius: "1rem",
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
const personSelectedCloseFocusHover = {
  backgroundColor: vars.color.black,
};
export const personSelectedCloseStyle = style({
  appearance: "none",
  backgroundColor: vars.color.base,
  borderColor: vars.color.base,
  borderRadius: "50%",
  cursor: "pointer",
  color: vars.color.white,
  fontSize: "1rem",
  fontWeight: vars.fontWeight.body,
  height: "1.5rem",
  justifyContent: "center",
  opacity: "0.75",
  padding: 0,
  position: "absolute",
  right: "1rem",
  textAlign: "center",
  textDecoration: "none",
  textTransform: "none",
  top: "1rem",
  width: "1.5rem",
  ":focus": personSelectedCloseFocusHover,
  ":hover": personSelectedCloseFocusHover,
});

export const personSelectedDescriptionStyle = style({
  backgroundColor: vars.color.green,
  borderRadius: "1rem",
  color: vars.color.black,
  margin: "-20% 5% 0 20%",
  padding: "1rem 2rem",
  position: "relative",
  "@media": {
    "screen and (min-width: 900px)": {
      margin: "-10% 10% 0 10%",
    },
  },
});

globalStyle(
  `${listItemStyle}:hover ${personTextStyle}, ${personButtonStyle}:focus ${personTextStyle}`,
  {
    backgroundColor: vars.color.red,
  }
);

globalStyle(`${personSelectedDescriptionStyle} p:not(:first-child)`, {
  display: "none",
});
