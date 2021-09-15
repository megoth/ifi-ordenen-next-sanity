import client, { getClient } from "../sanity";

const associationFields = `
  _id,
  name,
  active,
  'slug': slug.current,
  url,
  description
`;
export interface AssociationQuery
  extends Omit<Sanity.Schema.Association, "slug"> {
  slug: string;
}

export async function getAllAssociationsForAssociationPage(preview: boolean) {
  const results = await getClient(preview)
    .fetch(`*[_type == "association"] | order(name asc){
      ${associationFields}
    }`);
  return results;
}

export interface AssociationAndMoreQuery {
  association: AssociationQuery;
}
export async function getAssociationAndMore(
  slug: string | string[] | undefined,
  preview: boolean
): Promise<AssociationAndMoreQuery> {
  const association = await getClient(preview)
    .fetch(
      `*[_type == "association" && slug.current == $slug] {
        ${associationFields}
      }`,
      { slug }
    )
    .then((res) => res?.[0]);
  return { association };
}

export async function getAllAssociationsWithSlug(): Promise<
  Array<{ slug: string }>
> {
  const data = await client.fetch(
    `*[_type == "association"]{ 'slug': slug.current }`
  );
  return data;
}
