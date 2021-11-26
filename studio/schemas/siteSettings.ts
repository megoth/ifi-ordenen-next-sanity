export default {
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  __experimental_actions: [
    // "create",
    "update",
    // "delete",
    "publish",
  ],
  fields: [
    {
      name: "title",
      title: "Sidens tittel",
      type: "string",
    },
    {
      name: "description",
      title: "Beskrivelse av siden",
      type: "text",
    },
    {
      title: "Hovedmeny",
      name: "mainNav",
      type: "reference",
      to: { type: "navigation" },
    },
    {
      title: "Undermeny",
      name: "subNav",
      type: "reference",
      to: { type: "navigation" },
    },
    {
      name: "footer",
      title: "Tekst i foten",
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
};
