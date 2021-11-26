import React from "react";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/container";
import Layout from "../../components/layout";
import { GetStaticProps } from "next";
import {
  getAllPeopleWithSlug,
  getPersonAndMore,
  PersonAndMoreQuery,
} from "../../lib/api/people";
import { getSiteSettings, SiteSettingsPage } from "../../lib/api/site-settings";
import { imageBuilder } from "../../lib/sanity";

interface Props extends PersonAndMoreQuery, SiteSettingsPage {}

export default function PersonPage({ person, siteSettings }: Props) {
  const router = useRouter();
  if (!router.isFallback && !person?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout pageTitle={person?.name} siteSettings={siteSettings}>
      <Container>
        {router.isFallback ? (
          <div>Loading…</div>
        ) : (
          <div>
            <h1>{person.name}</h1>
            <img
              width={1240}
              height={540}
              alt={`Cover Image for ${person.name}`}
              src={imageBuilder(person.mainImage).url() || undefined}
            />
          </div>
        )}
      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
}) => {
  const [data, siteSettings] = await Promise.all([
    getPersonAndMore(params!.slug, preview),
    getSiteSettings(preview),
  ]);
  return {
    props: {
      preview,
      person: data?.person || null,
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
    fallback: true,
  };
}
