import client, { getClient } from "../sanity";
import { onlyUnique } from "../utils";

export interface EventQuery extends Omit<Sanity.Schema.Event, "slug"> {
  slug: string;
}

export interface EventForListQuery extends EventQuery {}

export async function getAllEventsForHistoryPage(
  preview: boolean
): Promise<Array<EventForListQuery>> {
  const results = await getClient(preview)
    .fetch(`*[ _type == "event" ] | order(year asc, date asc){
    name,
    short,
    year,
    date,
    major,
    'slug': slug.current,
    description
  }`);
  return results;
}

export async function getAllEventsWithSlug(): Promise<Array<{ slug: string }>> {
  const data = await client.fetch(
    `*[_type == "event" && defined(description) && defined(slug)]{ 'slug': slug.current }`
  );
  return data;
}

export function getYears(events: Array<EventForListQuery>): Array<string> {
  return events.map(({ year }) => year).filter(onlyUnique);
}
