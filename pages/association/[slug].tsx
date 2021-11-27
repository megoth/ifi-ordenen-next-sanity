import React from "react";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Layout from "../../components/layout";
import { GetStaticProps } from "next";
import {
  AssociationAndMoreQuery,
  getAllAssociationsWithSlug,
  getAssociationAndMore,
} from "../../lib/api/associations";
import { getSiteSettings, SiteSettingsPage } from "../../lib/api/site-settings";
import Loading from "../../components/loading";
import Association from "../../components/association";

interface Props extends AssociationAndMoreQuery, SiteSettingsPage {}

export default function AssociationPage({ association, siteSettings }: Props) {
  const router = useRouter();
  if (!router.isFallback && !association?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout pageTitle={association?.name} siteSettings={siteSettings}>
      {router.isFallback ? (
        <Loading />
      ) : (
        <Association association={association} />
      )}
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
