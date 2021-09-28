import React from "react";
import Layout from "../../components/layout";
import Container from "../../components/container";
import Header from "../../components/header";
import PostTitle from "../../components/post-title";
import {
  EventForListQuery,
  getAllEventsForHistoryPage,
  getYears,
} from "../../lib/api/history";
import HistoryYearEntry from "../../components/history-year-entry";

interface Props {
  allEvents?: Array<EventForListQuery>;
}

export default function AllPeoplePage({ allEvents }: Props) {
  const years = getYears(allEvents).reverse();
  return (
    <Layout>
      <Container>
        <Header />
        <PostTitle>Historie</PostTitle>
        <ul>
          {years.map((year) => (
            <li key={`year-${year}`}>
              <HistoryYearEntry
                events={allEvents.filter((event) => event.year === year)}
                year={year}
              />
            </li>
          ))}
        </ul>
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const allEvents = await getAllEventsForHistoryPage(preview);
  return {
    props: { allEvents },
    revalidate: 1,
  };
}
