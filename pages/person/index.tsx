import React from "react";
import Layout from "../../components/layout";
import Container from "../../components/container";
import Header from "../../components/header";
import PostTitle from "../../components/post-title";
import Link from "next/link";
import {
  getAllPeopleForPeoplePage,
  PersonForListQuery,
} from "../../lib/api/people";
import { getTitles } from "../../lib/api/awards";
import { getSiteSettings, SiteSettingsPage } from "../../lib/api/site-settings";

interface Props extends SiteSettingsPage {
  allPeople?: Array<PersonForListQuery>;
}

export default function AllPeoplePage({ allPeople, siteSettings }: Props) {
  const titles = getTitles(allPeople);
  const peopleSorted = allPeople.sort(
    (a, b) => a.year * 100 + a.yearOrder - b.year * 100 + b.yearOrder
  );
  return (
    <Layout>
      <Container>
        <Header title={siteSettings?.title} />
        <PostTitle>Personer</PostTitle>
        {titles.map((title) => (
          <section key={title}>
            <h2>{title}</h2>
            <ul className="list-disc">
              {peopleSorted
                .filter((person) => person.title === title)
                .map((person) => (
                  <li key={person.slug}>
                    <Link as={`/person/${person.slug}`} href="/person/[slug]">
                      <a className="hover:underline">
                        {person.name} ({person.title}, {person.year})
                      </a>
                    </Link>
                  </li>
                ))}
            </ul>
          </section>
        ))}
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const [allPeople, siteSettings] = await Promise.all([
    getAllPeopleForPeoplePage(preview),
    getSiteSettings(preview),
  ]);
  return {
    props: { allPeople, siteSettings },
    revalidate: 1,
  };
}
