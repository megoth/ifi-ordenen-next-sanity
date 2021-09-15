export default {
  name: "title",
  title: "Tittel",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Navn",
      type: "string",
    },
    {
      name: "insignia",
      title: "Medaljenavn",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    },
    {
      name: "image",
      title: "Bilde",
      type: "image",
      options: {
        hotspot: true,
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
      name: "order",
      title: "Rekkefølge",
      type: "number",
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
};
