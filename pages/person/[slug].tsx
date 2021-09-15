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
  getAllPeopleWithSlug,
  getPersonAndMore,
  PersonAndMoreQuery,
} from "../../lib/api/people";
import CoverImage from "../../components/cover-image";

interface Props extends PersonAndMoreQuery {}

export default function PersonPage({ person }: Props) {
  const router = useRouter();
  if (!router.isFallback && !person?.slug) {
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
                <title>{person.name} | Ifi-ordenen</title>
              </Head>
              <PostTitle>{person.name}</PostTitle>
              <CoverImage
                title={person.name}
                coverImage={person.mainImage}
                slug={person.slug}
              />
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
  const data = await getPersonAndMore(params!.slug, preview);
  return {
    props: {
      preview,
      person: data?.person || null,
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
