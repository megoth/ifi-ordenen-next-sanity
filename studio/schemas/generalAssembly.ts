import { BiSitemap } from "react-icons/bi";
import { defineField, defineType } from "sanity";
import client from "../lib/client";

export default defineType({
  name: "generalAssembly",
  title: "Generalforsamling",
  type: "document",
  icon: BiSitemap,
  fields: [
    defineField({
      name: "association",
      title: "Forening/organisasjon",
      description: "Nødvendig",
      type: "reference",
      to: [{ type: "association" }]
    }),
    defineField({
      name: "file",
      title: "Protokoll",
      description: "Nødvendig",
      type: "file"
    }),
    defineField({
      name: "date",
      title: "Dato",
      description: "Nødvendig",
      type: "date"
    }),
    defineField({
      name: "slug",
      title: "Slug",
      description: "Nødvendig",
      type: "slug",
      options: {
        source: async (doc) => {
          const association = await client.fetch('*[_id == $id][0]', { id: doc.association._ref})
          return `${association.short.toLowerCase()}-${doc.date}`;
        },
        maxLength: 96,
      },
    }),
    defineField({
      name: "extraordinary",
      title: "Ekstraordinær",
      type: "boolean",
      initialValue: false
    })
  ],
  preview: {
    select: {
      title: "association.name",
      subtitle: "date"
    }
  }
});
