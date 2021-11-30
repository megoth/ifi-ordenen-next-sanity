import { globalStyle, style } from "@vanilla-extract/css";
import { listRule } from "../text-block/styles.css";

export const listStyle = style(listRule);

globalStyle(`${listStyle} ${listStyle}`, {
  margin: "0 0 0 1.25rem",
});
