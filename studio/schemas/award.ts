export default {
  name: "award",
  title: "Tildeling",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Tittel",
      description: "Nødvendig",
      type: "reference",
      to: { type: "title" },
    },
    {
      name: "date",
      title: "Dato",
      description: "Nødvendig",
      type: "date",
    },
    {
      name: "dateOrder",
      title: "Rekkefølge (ift dato)",
      description:
        "For å rangere mottagere innad hver dato. Et tall mellom 0 og 100" +
        " (lavest rangeres først)",
      type: "number",
    },
    {
      name: "reason",
      title: "Fremhevet grunnlag",
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
      name: "description",
      title: "Grunnlag (resten)",
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
  ],
  preview: {
    select: {
      title: "title.name",
      date: "date",
    },
    prepare({ title, date }) {
      return {
        title,
        subtitle: date,
      };
    },
  },
};
