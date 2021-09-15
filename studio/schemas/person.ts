export default {
  name: "person",
  title: "Person",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Navn",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug (brukernavn)",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "titles",
      title: "Tildelinger",
      type: "array",
      of: [{ type: "award" }],
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
      media: "mainImage",
    },
  },
};
