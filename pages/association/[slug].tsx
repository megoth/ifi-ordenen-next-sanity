import React from "react";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Layout from "../../components/layout";
import { GetStaticProps } from "next";
import {
  AssociationQuery,
  getAllAssociationsWithSlug,
  getAssociationAndMore,
} from "../../lib/api/associations";
import { getSiteSettings, SiteSettingsPage } from "../../lib/api/site-settings";
import Loading from "../../components/loading";
import Association from "../../components/association";
import {
  EventForListQuery,
  getAllEventsForAssociation,
} from "../../lib/api/history";
import {
  getAllPeopleForAssociation,
  PersonForListQuery,
} from "../../lib/api/people";

interface Props extends SiteSettingsPage {
  association: AssociationQuery;
  events: Array<EventForListQuery>;
  members: Array<PersonForListQuery>;
}

export default function AssociationPage({
  association,
  siteSettings,
  events,
  members,
}: Props) {
  const router = useRouter();
  if (!router.isFallback && !association?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout pageTitle={association?.name} siteSettings={siteSettings}>
      {router.isFallback ? (
        <Loading />
      ) : (
        <Association
          association={association}
          events={events}
          members={members}
        />
      )}
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
}) => {
  const [association, siteSettings, events, members] = await Promise.all([
    getAssociationAndMore(params!.slug, preview),
    getSiteSettings(preview),
    getAllEventsForAssociation(params!.slug, preview),
    getAllPeopleForAssociation(params!.slug, preview),
  ]);
  return {
    props: {
      preview,
      association,
      siteSettings,
      events,
      members,
    },
    revalidate: 1,
  };
};

export async function getStaticPaths() {
  const allAssociations = await getAllAssociationsWithSlug();
  return {
    paths:
      allAssociations?.map((post) => ({
        params: {
          slug: post.slug,
        },
      })) || [],
    fallback: false,
  };
}
