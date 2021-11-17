import React from "react";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { getSiteSettings, SiteSettingsPage } from "../lib/api/site-settings";
import Layout from "../components/layout";
import Container from "../components/container";
import Header from "../components/header";
import PostTitle from "../components/post-title";
import { GetStaticProps } from "next";
import { getAllPagesWithSlug, getPage } from "../lib/api/pages";

interface Props extends SiteSettingsPage {
  page?: Sanity.Schema.Page;
}

export default function Post({ page, siteSettings }: Props) {
  const router = useRouter();
  if (!router.isFallback && !page?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout siteSettings={siteSettings}>
      <Container>
        <Header title={siteSettings?.title} />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <div>Tittel: {page.title}</div>
            <div>Neste steg: Laste inn dynamisk innhold</div>
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
    getPage(params!.slug, preview),
    getSiteSettings(preview),
  ]);
  return {
    props: {
      preview,
      page: data || null,
      siteSettings,
    },
    revalidate: 1,
  };
};

export async function getStaticPaths() {
  const allPages = await getAllPagesWithSlug();
  return {
    paths:
      allPages
        ?.filter(({ slug }) => !!slug)
        .map((page) => ({
          params: {
            slug: page.slug,
          },
        })) || [],
    fallback: true,
  };
}
