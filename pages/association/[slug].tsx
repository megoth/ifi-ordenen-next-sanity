import React from "react";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/container";
import Layout from "../../components/layout";
import { GetStaticProps } from "next";
import {
  AssociationAndMoreQuery,
  getAllAssociationsWithSlug,
  getAssociationAndMore,
} from "../../lib/api/associations";
import { getSiteSettings, SiteSettingsPage } from "../../lib/api/site-settings";
import BlockContent from "@sanity/block-content-to-react";
import Loading from "../../components/loading";

interface Props extends AssociationAndMoreQuery, SiteSettingsPage {}

export default function AssociationPage({ association, siteSettings }: Props) {
  const router = useRouter();
  if (!router.isFallback && !association?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout pageTitle={association?.name} siteSettings={siteSettings}>
      <Container>
        {router.isFallback ? (
          <Loading />
        ) : (
          <div>
            <h1>{association.name}</h1>
            <BlockContent
              blocks={association.description}
              projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
              dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
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
