import { style } from "@vanilla-extract/css";

export const listStyle = style({
  display: "grid",
  gap: "1em",
  gridTemplateColumns: "repeat(2, 1fr)",
  gridTemplateRows: "masonry",
  "@media": {
    "screen and (min-width: 600px)": {
      gridTemplateColumns: "repeat(3, 1fr)",
    },
    "screen and (min-width: 960px)": {
      gridTemplateColumns: "repeat(4, 1fr)",
    },
  },
});
