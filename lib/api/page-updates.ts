import { getClient } from "../sanity";

export interface PageUpdateQuery extends Sanity.Document {
  created: string;
  name: string;
  description: string;
  url: string;
}

export async function getAlbumUpdates(
  preview: boolean
): Promise<Array<PageUpdateQuery>> {
  return getClient(preview)
    .fetch(
      `*[_type == "album"][0...10] | order(_createdAt desc) {
      'created': _createdAt,
      name,
      'slug': slug.current
    }`
    )
    .then((albums) =>
      albums.map((album) => ({
        ...album,
        description: `Nytt album`,
        url: `/gallery/${album.slug}`,
      }))
    );
}

export async function getAwardUpdates(
  preview: boolean
): Promise<Array<PageUpdateQuery>> {
  return getClient(preview)
    .fetch(
      `*[_type == "person"] {
      'created': titles[]|order(date desc)[0].date,
      name,
      'slug': slug.current
    } | order(created desc)[0...10]`
    )
    .then((awards) =>
      awards.map((person) => ({
        ...person,
        description: `Ny ordenstildeling`,
        url: `/person/${person.slug}`,
      }))
    );
}

export async function getEventUpdates(
  preview: boolean
): Promise<Array<PageUpdateQuery>> {
  return getClient(preview)
    .fetch(
      `*[_type == "event"]{
        'created': _createdAt,
        name,
        'slug': slug.current
      }|order(created desc)[0...10]`
    )
    .then((events) =>
      events.map((event) => ({
        ...event,
        description: `Ny hendelse publisert`,
        url: `/history/${event.slug}`,
      }))
    );
}

export async function getPageUpdates(preview: boolean) {
  return Promise.all([
    getAlbumUpdates(preview),
    getAwardUpdates(preview),
    getEventUpdates(preview),
  ]).then(([albums, awards, events]) =>
    albums
      .concat(awards)
      .concat(events)
      .sort((a, b) => (a.created < b.created ? 1 : -1))
      .slice(0, 10)
  );
}
