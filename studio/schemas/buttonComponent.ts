export default {
  name: "button-component",
  title: "Knapp",
  type: "object",
  fields: [
    {
      name: "text",
      title: "Tekst",
      description: "Nødvendig",
      type: "string",
    },
    {
      name: "class",
      title: "Type knapp",
      type: "string",
      layout: "dropdown",
      options: {
        list: ["primary"],
      },
    },
  ],
  preview: {
    select: {
      title: "text",
      subtitle: "class",
    },
  },
};
