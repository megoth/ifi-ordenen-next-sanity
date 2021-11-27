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
    {
      name: "variant",
      title: "Type tekst",
      type: "string",
      layout: "dropdown",
      options: {
        list: ["large"],
      },
    },
  ],
  preview: {
    select: {
      text: "text",
      variant: "variant",
    },
    prepare({ text, variant }) {
      return {
        title: text[0]?.children[0]?.text,
        subtitle: `Tekst${variant ? ` (${variant})` : ""}`,
      };
    },
  },
};
