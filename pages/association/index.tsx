import React from "react";
import Layout from "../../components/layout";
import Container from "../../components/container";
import {
  AssociationQuery,
  getAllAssociationsForAssociationPage,
} from "../../lib/api/associations";
import { getSiteSettings, SiteSettingsPage } from "../../lib/api/site-settings";
import { getPage, PageQuery } from "../../lib/api/pages";
import PageComponents from "../../components/page-components";

interface Props extends SiteSettingsPage {
  associations?: Array<AssociationQuery>;
  page?: PageQuery;
}

export default function AllAssociationsPage({
  associations,
  siteSettings,
  page,
}: Props) {
  return (
    <Layout pageTitle={page?.title} siteSettings={siteSettings}>
      <Container>
        <PageComponents page={page} associations={associations} />
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const [associations, siteSettings, page] = await Promise.all([
    getAllAssociationsForAssociationPage(preview),
    getSiteSettings(preview),
    getPage("/association", preview),
  ]);
  return {
    props: { associations, siteSettings, page },
    revalidate: 1,
  };
}
