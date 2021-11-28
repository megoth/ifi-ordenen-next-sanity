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
  titles: Array<TitleQuery>;
}

export async function getAllPeople(
  preview: boolean
): Promise<Array<PersonForListQuery>> {
  return getClient(preview)
    .fetch(
      `*[ _type == "person" ]{
    name,
    'slug': slug.current,
    mainImage,
    'titles': titles[]{
      description,
      reason,
      title->,
      year,
    },
    'year': titles|order(year desc)[0].year,
    'yearOrder': titles|order(year desc)[0].yearOrder,
  } | order(year desc, yearOrder desc)`
    )
    .then((people) =>
      people.map(({ titles, ...props }) => ({
        ...props,
        titles: titles.sort((a, b) => (a.year > b.year ? -1 : 1)),
      }))
    );
}

export async function getAllPeopleForAssociation(
  slug: string | string[] | undefined,
  preview: boolean
): Promise<Array<PersonForListQuery>> {
  return getClient(preview)
    .fetch(
      `*[ _type == "association" && slug.current == $slug]{
  "members": *[ _type == "person" && references(^._id) ]{
    name,
    'slug': slug.current,
    mainImage,
    'titles': titles[]{
      description,
      reason,
      title->,
      year,
    },
    'year': titles|order(year desc)[0].year,
    'yearOrder': titles|order(year desc)[0].yearOrder,
  } | order(year desc, yearOrder desc)
}`,
      { slug }
    )
    .then((res) => res?.[0]?.members)
    .then((members) =>
      members?.map(({ titles, ...props }) => ({
        ...props,
        titles: titles.sort((a, b) => (a.year > b.year ? -1 : 1)),
      }))
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
        } | order(year desc),
        associations[]->,
    }`,
      { slug }
    )
    .then((res) => res?.[0]);
}

export async function getAllPeopleWithSlug(): Promise<Array<{ slug: string }>> {
  return client.fetch(`*[_type == "person"]{ 'slug': slug.current }`);
}

export function getSortOrderForYear(person: PersonForListQuery): number {
  return parseInt(person.titles[0].year, 10) * 100 + person.titles[0].yearOrder;
}
