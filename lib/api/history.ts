import client, { getClient } from "../sanity";
import { NextRouter } from "next/dist/shared/lib/router/router";
import { getArrayFromRouterQuery, getPathFromRouter } from "../utils";

export interface EventQuery
  extends Omit<Sanity.Schema.Event, "slug" | "sources" | "associations"> {
  slug: string;
  sources: Array<Sanity.Schema.Source>;
  associations: Array<Sanity.Schema.Association>;
}

export interface EventForListQuery
  extends Omit<Sanity.Schema.Event, "slug" | "sources" | "associations"> {
  slug: string;
}

export async function getAllEventsForHistoryPage(
  preview: boolean
): Promise<Array<EventForListQuery>> {
  return getClient(preview)
    .fetch(`*[ _type == "event" ] | order(year asc, date asc){
    name,
    short,
    year,
    date,
    major,
    'slug': slug.current,
    description,
  }`);
}

export async function getAllEventsForAssociation(
  slug: string | string[] | undefined,
  preview: boolean
): Promise<Array<EventForListQuery>> {
  return getClient(preview)
    .fetch(
      `*[ _type == "association" && slug.current == $slug]{
    "events": *[ _type == "event" && references(^._id)] | order(year asc, date asc){
      name,
      short,
      year,
      date,
      major,
      'slug': slug.current,
      description,
    }
  }`,
      { slug }
    )
    .then((res) => res?.[0]?.events);
}

export async function getAllEventsWithSlug(): Promise<Array<{ slug: string }>> {
  return client.fetch(
    `*[_type == "event" && defined(slug)]{ 'slug': slug.current }`
  );
}

export function getYearsFromEvents(events: Array<EventForListQuery>): string[] {
  return events.map(({ year }) => year);
}

export async function getEvent(
  slug: string | string[] | undefined,
  preview: boolean
) {
  return getClient(preview)
    .fetch(
      `*[ _type == "event" && slug.current == $slug ]{
    name,
    short,
    year,
    date,
    major,
    'slug': slug.current,
    description,
    'sources': sources[]->,
    'associations': associations[]->,
  }`,
      { slug }
    )
    .then((res) => res?.[0]);
}

export function getYearInListHref(
  router: NextRouter,
  currentYear: string,
  years: string[] | undefined
): string {
  return `${getPathFromRouter(router)}?${years
    ?.map((year) => `year=${year}`)
    ?.join("&")}${years.indexOf(currentYear) === -1 ? "" : `#${currentYear}`}`;
}
