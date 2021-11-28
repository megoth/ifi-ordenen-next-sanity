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
      date,
    },
    'date': titles|order(date desc)[0].date,
    'dateOrder': titles|order(date desc)[0].dateOrder,
  } | order(date desc, dateOrder desc)`
    )
    .then((people) =>
      people.map(({ titles, ...props }) => ({
        ...props,
        titles: titles.sort((a, b) => (a.date > b.date ? -1 : 1)),
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
      date,
    },
    'date': titles|order(date desc)[0].date,
    'dateOrder': titles|order(date desc)[0].dateOrder,
  } | order(date desc, dateOrder desc)
}`,
      { slug }
    )
    .then((res) => res?.[0]?.members)
    .then((members) =>
      members?.map(({ titles, ...props }) => ({
        ...props,
        titles: titles.sort((a, b) => (a.date > b.date ? -1 : 1)),
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
          date,
        } | order(date desc),
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
  return parseInt(person.titles[0].date, 10) * 100 + person.titles[0].dateOrder;
}
