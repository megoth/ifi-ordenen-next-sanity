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
      name: "name",
      title: "Navn",
      description: "(Default: Generalforsamling)",
      type: "string"
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
      description: "Nødvendig (skriv 00 om du ikke vet nøyaktig dag eller måned)",
      type: "date"
    })
  ],
  preview: {
    select: {
      associationName: "association.name",
      date: "date",
      meetingName: "name"
    },
    prepare({ associationName, date, meetingName }) {
      return {
        title: associationName,
        subtitle: `${date} (${meetingName || "Generalforsamling"})`
      };
    }
  }
});
