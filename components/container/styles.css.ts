import { style } from "@vanilla-extract/css";
import { vars } from "../styles.css";

export const containerStyle = style({
  padding: "0 2rem",
  selectors: {
    "&.contained": {
      overflow: "auto",
    },
    "&.green": {
      backgroundColor: vars.color.green,
      color: vars.color.black,
      marginTop: "3em",
      marginBottom: "2em",
      overflow: "auto",
      paddingTop: "1em",
      paddingBottom: "1em",
    },
  },
});
