import React from "react";
import Layout from "../../components/layout";
import { getSiteSettings, SiteSettingsPage } from "../../lib/api/site-settings";
import { getPage, PageQuery } from "../../lib/api/pages";
import PageComponents from "../../components/page-components";
import { getPageUpdates, PageUpdateQuery } from "../../lib/api/page-updates";

interface Props extends SiteSettingsPage {
  page?: PageQuery;
  pageUpdates?: Array<PageUpdateQuery>;
}

export default function Page({ pageUpdates, siteSettings, page }: Props) {
  return (
    <Layout pageTitle={page?.title} siteSettings={siteSettings}>
      <PageComponents page={page} pageUpdates={pageUpdates} />
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const [pageUpdates, siteSettings, page] = await Promise.all([
    getPageUpdates(preview),
    getSiteSettings(preview),
    getPage("page", preview),
  ]);
  return {
    props: { pageUpdates, siteSettings, page },
    revalidate: 1,
  };
}
