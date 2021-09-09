module.exports = {
  schemaPath: "./studio/schemas/schema.ts",
  outputPath: "./studio/schemas/types.ts",
  generateTypeName: (sanityTypeName) =>
    `${sanityTypeName[0].toLocaleUpperCase() + sanityTypeName.substr(1)}Schema`,
};
