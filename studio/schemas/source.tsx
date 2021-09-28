import React from "react";

export default {
  name: "source",
  title: "Kilde",
  type: "document",
  fields: [
    {
      name: "text",
      title: "Navn",
      description: "Nødvendig",
      type: "string",
    },
    {
      name: "url",
      title: "Lenke",
      type: "url",
    },
  ],
  preview: {
    select: {
      title: "text",
      url: "url",
    },
    prepare(selection) {
      const { title, url } = selection;
      return {
        title,
        media: <span>{url ? "🔗" : "📖"}</span>,
      };
    },
  },
};
