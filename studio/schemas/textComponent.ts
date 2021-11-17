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
};
