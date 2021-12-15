import { globalStyle, style } from "@vanilla-extract/css";
import { vars } from "../styles.css";

export const footerStyle = style({
  backgroundColor: vars.color.brown,
  marginTop: "2em",
  position: "sticky",
  top: "100vh",
});

export const footerContainerStyle = style({
  backgroundColor: vars.color.brown,
  display: "flex",
  flexDirection: "column",
  gap: "1em",
});

globalStyle(`${footerContainerStyle}${footerContainerStyle}`, {
  paddingTop: "2em",
  paddingBottom: "2em",
});

export const footerTextStyle = style({});

globalStyle(`${footerTextStyle} p:first-child`, {
  marginTop: 0,
});

globalStyle(`${footerTextStyle} p:last-child`, {
  marginBottom: 0,
});
