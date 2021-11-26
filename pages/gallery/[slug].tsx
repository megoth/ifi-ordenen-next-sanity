import React from "react";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/container";
import Layout from "../../components/layout";
import { GetStaticProps } from "next";
import { getSiteSettings, SiteSettingsPage } from "../../lib/api/site-settings";
import {
  AlbumWithImagesQuery,
  getAlbumWithImages,
  getAllAlbumsWithSlug,
} from "../../lib/api/gallery";
import BlockContent from "@sanity/block-content-to-react";
import { imageBuilder } from "../../lib/sanity";

interface Props extends SiteSettingsPage {
  album: AlbumWithImagesQuery;
}

export default function PersonPage({ album, siteSettings }: Props) {
  const router = useRouter();
  if ((!router.isFallback && !album?.slug) || !album) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout pageTitle={album.name} siteSettings={siteSettings}>
      <Container>
        {router.isFallback ? (
          <div>Loading…</div>
        ) : (
          <ul>
            {album.images?.map((image, index) => (
              <li key={`${album.slug}-${index}`}>
                <img src={imageBuilder(image.image).url() || undefined} />
                <BlockContent
                  blocks={image.description}
                  projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                  dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
                />
              </li>
            ))}
          </ul>
        )}
      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
}) => {
  const [album, siteSettings] = await Promise.all([
    getAlbumWithImages(params!.slug, preview),
    getSiteSettings(preview),
  ]);
  return {
    props: {
      preview,
      album,
      siteSettings,
    },
    revalidate: 1,
  };
};

export async function getStaticPaths() {
  const albums = await getAllAlbumsWithSlug();
  return {
    paths:
      albums?.map((album) => ({
        params: {
          slug: album.slug,
        },
      })) || [],
    fallback: true,
  };
}
