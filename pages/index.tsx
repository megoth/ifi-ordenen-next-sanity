import React from "react";
import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPostsForHome, PostQuery } from "../lib/api/posts";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import { getSiteSettings, SiteSettingsPage } from "../lib/api/site-settings";

interface Props extends SiteSettingsPage {
  allPosts: Array<PostQuery>;
}

export default function Index({ allPosts, siteSettings }: Props) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
      <Layout siteSettings={siteSettings}>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Container>
          <Intro {...siteSettings} />
          {/*{heroPost && <HeroPost {...heroPost} />}*/}
          {/*{morePosts.length > 0 && <MoreStories posts={morePosts} />}*/}
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const siteSettings = await getSiteSettings(preview);
  const allPosts = await getAllPostsForHome(preview);
  return {
    props: { allPosts, siteSettings },
    revalidate: 1,
  };
}
