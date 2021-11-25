export default {
  name: "text-component",
  title: "Tekst",
  type: "object",
  fields: [
    {
      name: "text",
      title: "Tekst",
      description: "Nødvendig",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
  preview: {
    select: {
      text: "text",
    },
    prepare({ text }) {
      return {
        title: text[0]?.children[0]?.text,
        subtitle: "Tekst",
      };
    },
  },
};
