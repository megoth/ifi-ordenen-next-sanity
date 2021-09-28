import React from "react";

export default {
  name: "association",
  title: "Forening/Organisasjon",
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
      name: "active",
      title: "Aktiv",
      type: "boolean",
      initialValue: true,
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
      name: "url",
      title: "Nettside",
      type: "url",
    },
    {
      name: "description",
      title: "Description",
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
      name: "previous",
      title: "Tidligere kjent som",
      type: "reference",
      to: { type: "association" },
    },
  ],
  preview: {
    select: {
      title: "name",
      short: "short",
      active: "active",
    },
    prepare(selection) {
      const { title, short, active } = selection;
      return {
        title: title,
        subtitle: short || "",
        media: <span>{active ? "✅" : "❌"}</span>,
      };
    },
  },
};
