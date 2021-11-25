export default {
  name: "link",
  type: "object",
  title: "Link",
  fields: [
    {
      name: "internalLink",
      title: "Internal Link",
      description: "Select pages for navigation",
      type: "reference",
      to: [{ type: "page" }],
    },
    {
      name: "externalUrl",
      title: "External URL",
      type: "string",
    },
  ],
};
