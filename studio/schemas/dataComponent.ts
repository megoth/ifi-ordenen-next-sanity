import {defineType} from "sanity";
import {dataModules} from '../lib/dataModules'

export default defineType({
  name: "data-component",
  title: "Data modul",
  type: "object",
  fields: [
    {
      name: "type",
      title: "Type",
      description: "Data må lenkes opp mot siden via kode",
      type: "string",
      // TODO: FIX
      // layout: "dropdown",
      options: {
        list: dataModules,
      },
    },
  ],
  preview: {
    select: {
      title: "type",
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title,
        subtitle: `Data modul`,
      };
    },
  },
});
