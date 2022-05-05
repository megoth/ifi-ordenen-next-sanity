import React from "react";
import Layout from "../../components/layout";
import { getAllPeople, PersonForListQuery } from "../../lib/api/people";
import { getSiteSettings, SiteSettingsPage } from "../../lib/api/site-settings";
import { getPage, PageQuery } from "../../lib/api/pages";
import PageComponents from "../../components/page-components";

interface Props extends SiteSettingsPage {
  members?: Array<PersonForListQuery>;
  page?: PageQuery;
}

export default function AllPeoplePage({ members, siteSettings, page }: Props) {
  return (
    <Layout pageTitle={page?.title} siteSettings={siteSettings}>
      <PageComponents page={page} members={members} />
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const [members, siteSettings, page] = await Promise.all([
    getAllPeople(preview, { dateOrder: "desc" }),
    getSiteSettings(preview),
    getPage("person", preview),
  ]);
  return {
    props: { members, siteSettings, page },
    revalidate: 1,
  };
}
