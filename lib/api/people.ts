import client, { getClient } from "../sanity";

export interface TitleQuery extends Omit<Sanity.Schema.Award, "title"> {
  title: Sanity.Schema.Title;
}

export interface PersonQuery
  extends Omit<Sanity.Schema.Person, "slug" | "titles" | "associations"> {
  slug: string;
  titles: Array<TitleQuery>;
  associations: Array<Sanity.Schema.Association>;
}

export interface PersonForListQuery
  extends Omit<Sanity.Schema.Person, "slug" | "titles"> {
  slug: string;
  title: string;
  titleOrder: number;
  year: number;
  yearOrder: number;
  reason: Array<Sanity.Keyed<Sanity.Block>>;
  description: Array<Sanity.Keyed<Sanity.Block>>;
}

export async function getAllPeopleForPeoplePage(
  preview: boolean
): Promise<Array<PersonForListQuery>> {
  const results = await getClient(preview).fetch(`*[ _type == "person" ]{
    name,
    'slug': slug.current,
    mainImage,
    'title': titles|order(year desc)[0].title->name,
    'titleOrder': titles|order(year desc)[0].title->order,
    'year': titles|order(year desc)[0].year,
    'yearOrder': titles|order(year desc)[0].yearOrder,
    'reason': titles|order(year desc)[0].reason,
    'description': titles|order(year desc)[0].description,
  } | order(year desc, yearOrder desc)`);
  return results.map((person) =>
    Object.assign({}, person, {
      year: parseInt(person.year.substr(0, 4), 10),
    })
  );
}

export async function getPersonAndMore(
  slug: string | string[] | undefined,
  preview: boolean
): Promise<PersonQuery> {
  return getClient(preview)
    .fetch(
      `*[ _type == "person" && slug.current == $slug ]{
        name,
        'slug': slug.current,
        mainImage,
        'titles': titles[]{
          description,
          reason,
          title->,
          year,
        }|order(year desc),
        associations[]->,
    }`,
      { slug }
    )
    .then((res) => res?.[0]);
}

export async function getAllPeopleWithSlug(): Promise<Array<{ slug: string }>> {
  const data = await client.fetch(
    `*[_type == "person"]{ 'slug': slug.current }`
  );
  return data;
}

export function getSortOrderForYear(person: PersonForListQuery): number {
  return person.yearOrder * 100 + person.titleOrder;
}
