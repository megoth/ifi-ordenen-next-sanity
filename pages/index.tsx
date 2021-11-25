import React from "react";
import Container from "../components/container";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getSiteSettings, SiteSettingsPage } from "../lib/api/site-settings";
import { getPage, PageQuery } from "../lib/api/pages";
import PageComponents from "../components/page-components";
import {
  getAllPeopleForPeoplePage,
  PersonForListQuery,
} from "../lib/api/people";

interface Props extends SiteSettingsPage {
  lastMembers?: Array<PersonForListQuery>;
  page?: PageQuery;
}

export default function Index({ siteSettings, page, lastMembers }: Props) {
  return (
    <>
      <Layout pageTitle={page?.title} siteSettings={siteSettings}>
        <Container>
          <Intro {...siteSettings} />
          <PageComponents page={page} lastMembers={lastMembers} />
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const [siteSettings, page, lastMembers] = await Promise.all([
    getSiteSettings(preview),
    getPage("/", preview),
    getAllPeopleForPeoplePage(preview),
  ]);
  return {
    props: { siteSettings, page, lastMembers },
    revalidate: 1,
  };
}
