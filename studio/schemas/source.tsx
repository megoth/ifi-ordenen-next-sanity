import React from "react";
import { VscSourceControl } from "react-icons/vsc";

export default {
  name: "source",
  title: "Kilde",
  type: "document",
  icon: VscSourceControl,
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
