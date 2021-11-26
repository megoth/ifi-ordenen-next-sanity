export default {
  name: "albumImage",
  title: "Bilde",
  type: "object",
  fields: [
    {
      name: "image",
      title: "image",
      description: "Nødvendig",
      type: "image",
      options: {
        hotspot: true,
      },
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
  ],
  preview: {
    select: {
      description: "description",
      image: "image",
    },
    prepare({ description, image }) {
      return {
        title: description[0]?.children[0]?.text,
        media: image,
      };
    },
  },
};
