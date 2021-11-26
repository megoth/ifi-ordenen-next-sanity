import { GrBook, GrBookmark } from "react-icons/gr";

export default {
  name: "dictionaryEntry",
  title: "Ordbok",
  type: "document",
  icon: GrBook,
  fields: [
    {
      name: "name",
      title: "Ord/uttrykk",
      description: "Nødvendig",
      type: "string",
    },
    {
      name: "slug",
      title: "Nøkkel",
      description: "Nødvendig",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    },
    {
      name: "description",
      title: "Forklaring",
      description: "Nødvendig",
      type: "array",
      of: [
        {
          title: "Block",
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          lists: [],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "slug.current",
    },
    prepare(selection) {
      return {
        ...selection,
        media: GrBookmark,
      };
    },
  },
};
