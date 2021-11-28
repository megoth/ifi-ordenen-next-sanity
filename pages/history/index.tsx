import React from "react";
import Layout from "../../components/layout";
import {
  EventForListQuery,
  getAllEventsForHistoryPage,
} from "../../lib/api/history";
import { getSiteSettings, SiteSettingsPage } from "../../lib/api/site-settings";
import { getPage, PageQuery } from "../../lib/api/pages";
import PageComponents from "../../components/page-components";
import { getAllPeople, PersonForListQuery } from "../../lib/api/people";

interface Props extends SiteSettingsPage {
  allEvents?: Array<EventForListQuery>;
  members?: Array<PersonForListQuery>;
  page?: PageQuery;
}

export default function AllPeoplePage({
  allEvents,
  members,
  siteSettings,
  page,
}: Props) {
  return (
    <Layout pageTitle={page?.title} siteSettings={siteSettings}>
      <PageComponents page={page} events={allEvents} members={members} />
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const [allEvents, siteSettings, page, members] = await Promise.all([
    getAllEventsForHistoryPage(preview),
    getSiteSettings(preview),
    getPage("/history", preview),
    getAllPeople(preview),
  ]);
  return {
    props: { allEvents, siteSettings, page, members },
    revalidate: 1,
  };
}
