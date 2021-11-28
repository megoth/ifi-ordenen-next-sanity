import { style } from "@vanilla-extract/css";

export const listStyle = style({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "1em",
  "@media": {
    "screen and (min-width: 640px)": {
      gridTemplateColumns: "1fr 1fr",
    },
    "screen and (min-width: 900px)": {
      gridTemplateColumns: "1fr 1fr 1fr",
    },
  },
});
