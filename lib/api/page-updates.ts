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
      `*[_type == "person"][0...10] | order(created desc) {
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

export async function getPageUpdates(preview: boolean) {
  return Promise.all([getAlbumUpdates(preview)]).then(([albums]) => albums);
}
