import { BiSitemap } from "react-icons/bi";
import { defineField, defineType } from "sanity";

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
