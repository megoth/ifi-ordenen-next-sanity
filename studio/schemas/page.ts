import React from "react";

export default {
  name: "page",
  title: "Side",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Tittel",
      description: "Nødvendig",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      description: "Nødvendig (unntatt for forsiden)",
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
        { type: "title-component" },
        { type: "text-component" },
        { type: "button-component" },
        { type: "buttons-component" },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
};
