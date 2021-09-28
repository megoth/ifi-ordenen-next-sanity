import React from "react";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/container";
import Header from "../../components/header";
import Layout from "../../components/layout";
import PostTitle from "../../components/post-title";
import Head from "next/head";
import { GetStaticProps } from "next";
import {
  AssociationAndMoreQuery,
  getAllAssociationsWithSlug,
  getAssociationAndMore,
} from "../../lib/api/associations";
import PostBody from "../../components/post-body";
import { getSiteSettings, SiteSettingsPage } from "../../lib/api/site-settings";

interface Props extends AssociationAndMoreQuery, SiteSettingsPage {}

export default function AssociationPage({ association, siteSettings }: Props) {
  const router = useRouter();
  if (!router.isFallback && !association?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout>
      <Container>
        <Header title={siteSettings?.title} />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>{association.name} | Ifi-ordenen</title>
              </Head>
              <PostTitle>{association.name}</PostTitle>
              <PostBody content={association.description} />
            </article>
          </>
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
    getAssociationAndMore(params!.slug, preview),
    getSiteSettings(preview),
  ]);
  return {
    props: {
      preview,
      association: data?.association || null,
      siteSettings,
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
    fallback: true,
  };
}
