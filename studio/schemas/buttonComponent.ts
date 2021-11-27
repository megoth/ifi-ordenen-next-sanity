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
      name: "variant",
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
      subtitle: "variant",
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
