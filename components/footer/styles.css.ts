import { style } from "@vanilla-extract/css";
import { vars } from "../styles.css";

export const footerStyle = style({
  backgroundColor: vars.color.brown,
  marginTop: "2em",
  position: "sticky",
  top: "100vh",
});
