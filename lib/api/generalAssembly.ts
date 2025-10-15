import { getClient } from "../sanity";
import { Association, GeneralAssembly } from "../../studio/sanity.types";
import { onlyUnique } from "../utils";


export interface GeneralAssemblyForListQuery extends Omit<GeneralAssembly, "association"> {
  association: Association;
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

export function getDatesFromGeneralAssemblies(
  assemblies: Array<GeneralAssemblyForListQuery>
): string[] {
  return assemblies.map(({ date }) => date).filter(onlyUnique);
}