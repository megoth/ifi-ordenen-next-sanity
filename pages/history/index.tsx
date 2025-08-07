import React from "react";
import Layout from "../../components/layout";
import {
  EventForListQuery,
  getAllEventsForHistoryPage
} from "../../lib/api/history";
import { getSiteSettings, SiteSettingsPage } from "../../lib/api/site-settings";
import { getPage, PageQuery } from "../../lib/api/pages";
import PageComponents from "../../components/page-components";
import { getAllPeople, PersonForListQuery } from "../../lib/api/people";
import { GeneralAssemblyForListQuery, getAllGeneralAssemblies } from "../../lib/api/generalAssembly";

interface Props extends SiteSettingsPage {
  allEvents?: Array<EventForListQuery>;
  members?: Array<PersonForListQuery>;
  page?: PageQuery;
  assemblies?: Array<GeneralAssemblyForListQuery>;
}

export default function HistoryPage({
                                      allEvents,
                                      members,
                                      siteSettings,
                                      page,
                                      assemblies
                                    }: Props) {
  return (
    <Layout pageTitle={page?.title} siteSettings={siteSettings}>
      <PageComponents page={page} events={allEvents} members={members} assemblies={assemblies} />
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const [allEvents, siteSettings, page, members, assemblies] = await Promise.all([
    getAllEventsForHistoryPage(preview),
    getSiteSettings(preview),
    getPage("history", preview),
    getAllPeople(preview),
    getAllGeneralAssemblies(preview)
  ]);
  return {
    props: { allEvents, siteSettings, page, members, assemblies }
  };
}
