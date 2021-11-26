import { getClient } from "../sanity";

export interface DictionaryEntryQuery
  extends Omit<Sanity.Schema.DictionaryEntry, "slug"> {
  slug: string;
}

export async function getAllEntriesInDictionary(
  preview: boolean
): Promise<Array<DictionaryEntryQuery>> {
  return await getClient(preview)
    .fetch(`*[ _type == "dictionaryEntry" ] | order(name asc){
    name,
    'slug': slug.current,
    description
  }`);
}
