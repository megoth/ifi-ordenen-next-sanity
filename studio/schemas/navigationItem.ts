import { GrNavigate } from "react-icons/gr";
import {defineType} from "sanity";

export default defineType({
  name: "navigationItem",
  title: "Navigation Item",
  type: "object",
  icon: GrNavigate,
  fields: [
    {
      name: "text",
      type: "string",
      title: "Navigation Text",
    },
    {
      name: "navigationItemUrl",
      type: "link",
      title: "Navigation Item URL",
    },
  ],
});
