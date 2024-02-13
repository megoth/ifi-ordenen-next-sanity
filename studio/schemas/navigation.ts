import { GrNavigate } from "react-icons/gr";
import {defineType} from "sanity";

export default defineType({
  name: "navigation",
  title: "Navigering",
  type: "document",
  icon: GrNavigate,
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "navId",
      type: "slug",
      title: "Navigation Id",
    },
    {
      name: "items",
      type: "array",
      title: "Navigation items",
      of: [{ type: "navigationItem" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "navId.current",
    },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle,
        media: GrNavigate,
      };
    },
  },
});
