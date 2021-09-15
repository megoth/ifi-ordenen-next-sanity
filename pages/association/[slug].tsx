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

interface Props extends AssociationAndMoreQuery {}

export default function AssociationPage({ association }: Props) {
  const router = useRouter();
  console.log("ROUTER", router, association);
  if (!router.isFallback && !association?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout>
      <Container>
        <Header />
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
  const data = await getAssociationAndMore(params!.slug, preview);
  return {
    props: {
      preview,
      association: data?.association || null,
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
