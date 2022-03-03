import React from "react";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Layout from "../../components/layout";
import { GetStaticProps } from "next";
import { getSiteSettings, SiteSettingsPage } from "../../lib/api/site-settings";
import {
  AlbumWithImagesQuery,
  getAlbumWithImages,
  getAllAlbumsWithSlug,
} from "../../lib/api/gallery";
import Loading from "../../components/loading";
import Album from "../../components/album";

interface Props extends SiteSettingsPage {
  album: AlbumWithImagesQuery;
}

export default function AlbumPage({ album, siteSettings }: Props) {
  const router = useRouter();
  if ((!router.isFallback && !album?.slug) || !album) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout pageTitle={album.name} siteSettings={siteSettings}>
      {router.isFallback ? <Loading /> : <Album album={album} />}
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
    fallback: false,
  };
}
