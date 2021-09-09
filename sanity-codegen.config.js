module.exports = {
  schemaPath: "./studio/schemas/schema.ts",
  generateTypeName: (sanityTypeName) =>
    `${sanityTypeName[0].toLocaleUpperCase() + sanityTypeName.substr(1)}Schema`,
};
