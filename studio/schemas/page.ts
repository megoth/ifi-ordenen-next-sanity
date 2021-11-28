import { RiPagesLine } from "react-icons/ri";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export default {
  name: "page",
  title: "Side",
  type: "document",
  icon: RiPagesLine,
  fields: [
    {
      name: "name",
      title: "Navn",
      description: "Nødvendig",
      type: "string",
    },
    {
      name: "title",
      title: "Tittel",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      description: "Nødvendig",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "description",
      title: "Beskrivelse",
      type: "text",
    },
    {
      name: "components",
      title: "Innhold",
      type: "array",
      of: [
        { type: "text-component" },
        { type: "button-component" },
        { type: "buttons-component" },
        { type: "data-component" },
      ],
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "slug.current",
    },
    prepare({ title, subtitle, slug }) {
      return {
        title,
        subtitle,
        media: RiPagesLine,
      };
    },
  },
};
