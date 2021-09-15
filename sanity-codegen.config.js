export default {
  schemaPath: "./studio/schemas/schema.js",
  generateTypeName: (sanityTypeName) =>
    `${sanityTypeName[0].toLocaleUpperCase() + sanityTypeName.substr(1)}Schema`,
};
