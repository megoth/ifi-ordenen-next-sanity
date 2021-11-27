import React from "react";
import Layout from "../../components/layout";
import { getSiteSettings, SiteSettingsPage } from "../../lib/api/site-settings";
import { getPage, PageQuery } from "../../lib/api/pages";
import PageComponents from "../../components/page-components";
import {
  DictionaryEntryQuery,
  getAllEntriesInDictionary,
} from "../../lib/api/dictionary";

interface Props extends SiteSettingsPage {
  allEntries?: Array<DictionaryEntryQuery>;
  page?: PageQuery;
}

export default function AllPeoplePage({
  allEntries,
  siteSettings,
  page,
}: Props) {
  return (
    <Layout pageTitle={page?.title} siteSettings={siteSettings}>
      <PageComponents page={page} dictionaryEntries={allEntries} />
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const [allEntries, siteSettings, page] = await Promise.all([
    getAllEntriesInDictionary(preview),
    getSiteSettings(preview),
    getPage("/dictionary", preview),
  ]);
  return {
    props: { allEntries, siteSettings, page },
    revalidate: 1,
  };
}
