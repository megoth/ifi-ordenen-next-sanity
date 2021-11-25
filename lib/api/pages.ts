import client, { getClient } from "../sanity";

export interface PageQuery extends Omit<Sanity.Schema.Page, "slug"> {
  slug: string;
}

export async function getAllPagesWithSlug(): Promise<Array<{ slug: string }>> {
  return await client.fetch(`*[_type == "page"]{ 'slug': slug.current }`);
}

export async function getPage(
  slug: string | string[] | undefined,
  preview: boolean
): Promise<PageQuery> {
  return await getClient(preview)
    .fetch(
      `*[ _type == "page" && slug.current == $slug ]{
      name,
      title,
      'slug': slug.current,
      description,
      components,
    }`,
      { slug }
    )
    .then((res) => res?.[0] || null);
}
