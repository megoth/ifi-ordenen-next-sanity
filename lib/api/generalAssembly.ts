import { getClient } from "../sanity";
import { GeneralAssembly } from "../../studio/sanity.types";


export interface GeneralAssemblyForListQuery
  extends Omit<GeneralAssembly, "slug"> {
  slug: string;
}

export async function getAllGeneralAssemblies(preview: boolean): Promise<Array<GeneralAssemblyForListQuery>> {
  return await getClient(preview).fetch(`*[_type == "generalAssembly"]{
  _id,
  association->,
  name,
  file {
    asset->
  },
  date,
  'slug': slug.current,
    }|order(date asc)`);
}