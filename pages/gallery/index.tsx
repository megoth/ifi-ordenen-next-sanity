import React from "react";
import Layout from "../../components/layout";
import { getSiteSettings, SiteSettingsPage } from "../../lib/api/site-settings";
import { getPage, PageQuery } from "../../lib/api/pages";
import PageComponents from "../../components/page-components";
import { AlbumQuery, getAllAlbums } from "../../lib/api/gallery";

interface Props extends SiteSettingsPage {
  albums?: Array<AlbumQuery>;
  page?: PageQuery;
}

export default function AllAlbumsPage({ albums, siteSettings, page }: Props) {
  return (
    <Layout pageTitle={page?.title} siteSettings={siteSettings}>
      <PageComponents page={page} albums={albums} />
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const [albums, siteSettings, page] = await Promise.all([
    getAllAlbums(preview),
    getSiteSettings(preview),
    getPage("gallery", preview),
  ]);
  return {
    props: { albums, siteSettings, page },
    revalidate: 1,
  };
}
