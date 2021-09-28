import React from "react";

export default {
  name: "event",
  title: "Historisk hendelse",
  type: "document",
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
      description: "Nødvendig om det legges til beskrivelse",
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
    },
    prepare(selection) {
      const { title, year, major } = selection;
      return {
        title,
        subtitle: year.substr(0, 4),
        media: <span>{major ? "⭐" : " "}</span>,
      };
    },
  },
};
