import { BiMedal } from "react-icons/bi";

export default {
  name: "title",
  title: "Tittel",
  type: "document",
  icon: BiMedal,
  fields: [
    {
      name: "name",
      title: "Navn",
      description: "Nødvendig",
      type: "string",
    },
    {
      name: "insignia",
      title: "Medaljenavn",
      description: "Nødvendig",
      type: "string",
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
      name: "image",
      title: "Bilde",
      description: "Nødvendig",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "description",
      title: "Beskrivelse",
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
    {
      name: "order",
      title: "Rekkefølge",
      description: "Nødvendig",
      type: "number",
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
};
