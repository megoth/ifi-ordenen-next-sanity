import client, { getClient } from "../sanity";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export interface AlbumQuery
  extends Omit<Sanity.Schema.Album, "slug" | "images"> {
  slug: string;
  mainImage: SanityImageSource;
}

export interface AlbumWithImagesQuery
  extends Omit<Sanity.Schema.Album, "slug"> {
  slug: string;
}

export async function getAllAlbums(
  preview: boolean
): Promise<Array<AlbumQuery>> {
  return await getClient(preview)
    .fetch(`*[ _type == "album" ] | order(date desc){
    name,
    'slug': slug.current,
    date,
    'mainImage': images[0].image
  }`);
}

export async function getAllAlbumsWithSlug(): Promise<Array<{ slug: string }>> {
  return await client.fetch(`*[_type == "album"]{ 'slug': slug.current }`);
}

export async function getAlbumWithImages(
  slug: string | string[] | undefined,
  preview: boolean
): Promise<AlbumWithImagesQuery> {
  const album = await getClient(preview)
    .fetch(
      `*[ _type == "album" && slug.current == $slug ]{
      name,
      'slug': slug.current,
      images,
    }`,
      { slug }
    )
    .then((res) => res?.[0]);
  return album;
}
