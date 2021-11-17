export default {
  name: "title-component",
  title: "Undertittel",
  type: "object",
  fields: [
    {
      name: "text",
      title: "Tekst",
      description: "Nødvendig",
      type: "string",
    },
  ],
  preview: {
    select: {
      text: "text",
    },
    prepare(selection) {
      const { text } = selection;
      return {
        title: `Tittel: ${text}`,
      };
    },
  },
};
