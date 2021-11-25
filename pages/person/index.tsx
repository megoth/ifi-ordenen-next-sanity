import React from "react";
import Layout from "../../components/layout";
import Container from "../../components/container";
import {
  getAllPeopleForPeoplePage,
  PersonForListQuery,
} from "../../lib/api/people";
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
      <Container>
        <PageComponents page={page} members={members} />
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const [members, siteSettings, page] = await Promise.all([
    getAllPeopleForPeoplePage(preview),
    getSiteSettings(preview),
    getPage("/person", preview),
  ]);
  return {
    props: { members, siteSettings, page },
    revalidate: 1,
  };
}
