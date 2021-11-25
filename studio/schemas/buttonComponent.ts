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
      name: "link",
      type: "link",
      title: "Lenke",
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
    prepare(selection) {
      const { title, subtitle } = selection;
      return {
        title,
        subtitle: `Knapp${subtitle ? ` (${subtitle})` : ""}`,
      };
    },
  },
};
