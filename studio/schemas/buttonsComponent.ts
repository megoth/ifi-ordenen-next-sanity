export default {
  name: "buttons-component",
  title: "Knapper",
  type: "object",
  fields: [
    {
      name: "buttons",
      title: "Knapper",
      type: "array",
      of: [{ type: "button-component" }],
    },
  ],
  preview: {
    select: {
      buttons: "buttons",
    },
    prepare(selection) {
      const { buttons } = selection;
      return {
        title: buttons.map((button) => button.text).join(", "),
        subtitle: "Knapper",
      };
    },
  },
};
