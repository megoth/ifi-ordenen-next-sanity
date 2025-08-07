import client, { getClient } from "../sanity";
import { GeneralAssembly } from "../../studio/sanity.types";

const generalAssemblyFields = `
  _id,
  association->,
  file {
    asset->
  },
  date,
  'slug': slug.current,
  extraOrdinary,
`;

export interface GeneralAssemblyQuery
  extends Omit<GeneralAssembly, "slug"> {
  slug: string;
}

export interface GeneralAssemblyForListQuery
  extends Omit<GeneralAssembly, "slug"> {
  slug: string;
}

export async function getAllGeneralAssemblies(preview: boolean): Promise<Array<GeneralAssemblyForListQuery>> {
  return await getClient(preview).fetch(`*[_type == "generalAssembly"]{
      ${generalAssemblyFields}
    }|order(date asc)`);
}

export async function getGeneralAssemblyWithSlug(): Promise<Array<{ slug: string }>> {
  return client.fetch(`*[ _type == "generalAssembly" && slug.current == $slug ]{
      ${generalAssemblyFields}
      }`);
}