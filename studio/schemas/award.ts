export default {
  name: "award",
  title: "Tildeling",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Tittel",
      type: "reference",
      to: { type: "title" },
    },
    {
      name: "year",
      title: "År",
      type: "date",
      options: {
        dateFormat: "YYYY",
      },
    },
    {
      name: "yearOrder",
      title: "Rekkefølge (ift år)",
      type: "number",
      description:
        "For å rangere mottagere innad hvert år. Et tall mellom 0 og 100",
    },
    {
      name: "reason",
      title: "Fremhevet grunnlag",
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
      subtitle: "year",
    },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle: subtitle.substr(0, 4),
      };
    },
  },
};
