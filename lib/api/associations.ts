import client, { getClient } from "../sanity";

const associationFields = `
  _id,
  name,
  short,
  active,
  'slug': slug.current,
  logo,
  logoBackgroundColor,
  url,
  description,
  previous->
`;
export interface AssociationQuery
  extends Omit<Sanity.Schema.Association, "slug" | "previous"> {
  slug: string;
  previous: Sanity.Schema.Association;
}

export async function getAllAssociations(preview: boolean) {
  return await getClient(preview)
    .fetch(`*[_type == "association"] | order(name asc){
      ${associationFields}
    }`);
}

export async function getAssociationAndMore(
  slug: string | string[] | undefined,
  preview: boolean
): Promise<AssociationQuery> {
  return getClient(preview)
    .fetch(
      `*[_type == "association" && slug.current == $slug] {
        ${associationFields}
      }`,
      { slug }
    )
    .then((res) => res?.[0]);
}

export async function getAllAssociationsWithSlug(): Promise<
  Array<{ slug: string }>
> {
  return client.fetch(`*[_type == "association"]{ 'slug': slug.current }`);
}

export function getLogoStyle(association: AssociationQuery) {
  return association.logoBackgroundColor
    ? { backgroundColor: association.logoBackgroundColor.hex }
    : {};
}
