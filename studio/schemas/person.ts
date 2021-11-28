import { BsPerson } from "react-icons/bs";

export default {
  name: "person",
  title: "Person",
  type: "document",
  icon: BsPerson,
  fields: [
    {
      name: "name",
      title: "Navn",
      description: "Nødvendig",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug (brukernavn)",
      description: "Nødvendig",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "mainImage",
      title: "Main image",
      description: "Nødvendig",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "titles",
      title: "Tildelinger",
      description: "Nødvendig",
      type: "array",
      of: [{ type: "award" }],
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
      subtitle: "slug.current",
      media: "mainImage",
    },
  },
};
