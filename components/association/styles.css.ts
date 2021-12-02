import { style } from "@vanilla-extract/css";
import { listRule } from "../text-block/styles.css";
import { vars } from "../styles.css";

export const listStyle = style(listRule);

export const detailsStyle = style({
  "@media": {
    "screen and (min-width: 600px)": {
      overflow: "auto",
    },
  },
});

export const logoStyle = style({
  backgroundColor: vars.color.white,
  borderRadius: "1rem",
  padding: "1rem",
  textAlign: "center",
  "@media": {
    "screen and (min-width: 600px)": {
      float: "right",
      marginLeft: "1rem",
      maxWidth: "40%",
    },
  },
});
