import React from "react";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { getSiteSettings, SiteSettingsPage } from "../lib/api/site-settings";
import Layout from "../components/layout";
import Container from "../components/container";
import { GetStaticProps } from "next";
import { getAllPagesWithSlug, getPage, PageQuery } from "../lib/api/pages";
import PageComponents from "../components/page-components";
import Loading from "../components/loading";

interface Props extends SiteSettingsPage {
  page?: PageQuery;
}

export default function Post({ page, siteSettings }: Props) {
  const router = useRouter();
  if ((!router.isFallback && !page?.slug) || !page) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout pageTitle={page?.title} siteSettings={siteSettings}>
      <Container>
        {router.isFallback ? <Loading /> : <PageComponents page={page} />}
      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
}) => {
  const [data, siteSettings] = await Promise.all([
    getPage(`/${params!.slug}`, preview),
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
