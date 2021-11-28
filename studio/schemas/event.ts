import { BsClock } from "react-icons/bs";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export default {
  name: "event",
  title: "Historie",
  type: "document",
  icon: BsClock,
  fields: [
    {
      name: "name",
      title: "Navn",
      description: "Nødvendig",
      type: "string",
    },
    {
      name: "short",
      title: "Forkortelse",
      type: "string",
    },
    {
      name: "year",
      title: "År",
      description: "Nødvendig",
      type: "date",
      options: {
        dateFormat: "YYYY",
      },
    },
    {
      name: "date",
      title: "Dato",
      description: "Hvis man vet nøyaktig dato",
      type: "date",
    },
    {
      name: "major",
      title: "Stor hendelse",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "slug",
      title: "Slug",
      description: "Nødvendig",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    },
    {
      name: "description",
      title: "Beskrivelse",
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
    {
      name: "sources",
      title: "Kilder",
      description: "Helst en eller flere",
      type: "array",
      of: [{ type: "reference", to: { type: "source" } }],
    },
    {
      name: "associations",
      title: "Foreninger/organisasjoner",
      type: "array",
      of: [{ type: "reference", to: { type: "association" } }],
    },
  ],
  preview: {
    select: {
      title: "name",
      year: "year",
      major: "major",
      slug: "slug.current",
    },
    prepare({ title, major, slug }) {
      return {
        title,
        subtitle: slug,
        media: major ? AiFillStar : AiOutlineStar,
      };
    },
  },
};
