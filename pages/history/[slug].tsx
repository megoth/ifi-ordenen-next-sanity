import React from "react";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Layout from "../../components/layout";
import { GetStaticProps } from "next";
import { getSiteSettings, SiteSettingsPage } from "../../lib/api/site-settings";
import Loading from "../../components/loading";
import Event from "../../components/event";
import {
  EventQuery,
  getAllEventsWithSlug,
  getEvent,
} from "../../lib/api/history";

interface Props extends SiteSettingsPage {
  event: EventQuery;
}

export default function EventPage({ event, siteSettings }: Props) {
  const router = useRouter();
  if ((!router.isFallback && !event?.slug) || !event) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout pageTitle={event.name} siteSettings={siteSettings}>
      {router.isFallback ? <Loading /> : <Event event={event} />}
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
}) => {
  const [event, siteSettings] = await Promise.all([
    getEvent(params!.slug, preview),
    getSiteSettings(preview),
  ]);
  return {
    props: {
      preview,
      event,
      siteSettings,
    },
    revalidate: 1,
  };
};

export async function getStaticPaths() {
  const events = await getAllEventsWithSlug();
  return {
    paths:
      events?.map((event) => ({
        params: {
          slug: event.slug,
        },
      })) || [],
    fallback: false,
  };
}
