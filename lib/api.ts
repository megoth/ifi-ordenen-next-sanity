import client, { previewClient } from "./sanity";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

const postFields = `
  _id,
  name,
  title,
  'date': publishedAt,
  excerpt,
  'slug': slug.current,
  'coverImage': mainImage,
  'author': author->{name, 'picture': image.asset->url},
`;
export interface PostQuery
  extends Omit<
    Sanity.Schema.PostSchema,
    "publishedAt" | "slug" | "mainImage" | "author"
  > {
  date: string;
  excerpt: string;
  slug: string;
  coverImage: SanityImageSource;
  author: {
    name: string;
    picture: string;
  };
}

const getUniquePosts = (posts: Array<PostQuery>) => {
  const slugs = new Set();
  return posts.filter((post) => {
    if (slugs.has(post.slug)) {
      return false;
    } else {
      slugs.add(post.slug);
      return true;
    }
  });
};

const getClient = (preview: boolean) => (preview ? previewClient : client);

export async function getPreviewPostBySlug(slug: string) {
  const data = await getClient(true).fetch(
    `*[_type == "post" && slug.current == $slug] | order(publishedAt desc){
      ${postFields}
      body
    }`,
    { slug }
  );
  return data[0];
}

export async function getAllPostsWithSlug(): Promise<Array<{ slug: string }>> {
  const data = await client.fetch(`*[_type == "post"]{ 'slug': slug.current }`);
  return data;
}

export async function getAllPostsForHome(preview: boolean) {
  const results = await getClient(preview)
    .fetch(`*[_type == "post"] | order(publishedAt desc){
      ${postFields}
    }`);
  return getUniquePosts(results);
}

export interface PostAndMorePostsQuery extends PostQuery {
  comments?: Array<Sanity.Schema.CommentSchema>;
}
export async function getPostAndMorePosts(
  slug: string | string[] | undefined,
  preview: boolean
) {
  const curClient = getClient(preview);
  const [post, morePosts] = await Promise.all([
    curClient
      .fetch(
        `*[_type == "post" && slug.current == $slug] | order(_updatedAt desc) {
        ${postFields}
        body,
        'comments': *[
                      _type == "comment" && 
                      post._ref == ^._id && 
                      approved == true] {
          _id, 
          name, 
          email, 
          comment, 
          _createdAt
        }
      }`,
        { slug }
      )
      .then((res) => res?.[0]),
    curClient.fetch(
      `*[_type == "post" && slug.current != $slug] | order(publishedAt desc, _updatedAt desc){
        ${postFields}
        body,
      }[0...2]`,
      { slug }
    ),
  ]);
  return { post, morePosts: getUniquePosts(morePosts) };
}
