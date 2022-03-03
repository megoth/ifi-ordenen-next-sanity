import React from "react";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Layout from "../../components/layout";
import { GetStaticProps } from "next";
import {
  getAllPeopleWithSlug,
  getPersonAndMore,
  PersonQuery,
} from "../../lib/api/people";
import { getSiteSettings, SiteSettingsPage } from "../../lib/api/site-settings";
import Loading from "../../components/loading";
import Person from "../../components/person";

interface Props extends SiteSettingsPage {
  person: PersonQuery;
}

export default function PersonPage({ person, siteSettings }: Props) {
  const router = useRouter();
  if (!router.isFallback && !person?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout pageTitle={person?.name} siteSettings={siteSettings}>
      {router.isFallback ? <Loading /> : <Person person={person} />}
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
}) => {
  const [person, siteSettings] = await Promise.all([
    getPersonAndMore(params!.slug, preview),
    getSiteSettings(preview),
  ]);
  return {
    props: {
      preview,
      person,
      siteSettings,
    },
    revalidate: 1,
  };
};

export async function getStaticPaths() {
  const allPeople = await getAllPeopleWithSlug();
  return {
    paths:
      allPeople?.map((post) => ({
        params: {
          slug: post.slug,
        },
      })) || [],
    fallback: false,
  };
}
