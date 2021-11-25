import client, { getClient } from "../sanity";

export interface PersonQuery extends Omit<Sanity.Schema.Person, "slug"> {
  slug: string;
}

export interface PersonForListQuery extends PersonQuery {
  title: string;
  titleOrder: number;
  year: number;
  yearOrder: number;
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
    'yearOrder': titles|order(year desc)[0].yearOrder
  }`);
  return results.map((person) =>
    Object.assign({}, person, {
      year: parseInt(person.year.substr(0, 4), 10),
    })
  );
}

export interface PersonAndMoreQuery {
  person: PersonQuery;
}
export async function getPersonAndMore(
  slug: string | string[] | undefined,
  preview: boolean
): Promise<PersonAndMoreQuery> {
  const person = await getClient(preview)
    .fetch(
      `*[ _type == "person" && slug.current == $slug ]{
      name,
      'slug': slug.current,
      mainImage,
      'titles': titles|order(year desc).title->,
      'years': titles|order(year desc).year
    }`,
      { slug }
    )
    .then((res) => res?.[0]);
  return { person };
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
