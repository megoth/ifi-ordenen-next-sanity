import React from "react";
import Layout from "../../components/layout";
import Container from "../../components/container";
import {
  AssociationQuery,
  getAllAssociationsForAssociationPage,
} from "../../lib/api/associations";
import Header from "../../components/header";
import PostTitle from "../../components/post-title";
import Link from "next/link";

interface Props {
  associations?: Array<AssociationQuery>;
}

export default function AllAssociationsPage({ associations }: Props) {
  return (
    <Layout>
      <Container>
        <Header />
        <PostTitle>
          Organisasjoner tilknyttet Institutt for informatikk
        </PostTitle>
        <h2 className="text-3xl">Aktive foreninger</h2>
        <ul className="list-disc">
          {associations
            ?.filter(({ active }) => active)
            .map((association) => (
              <li key={association.slug}>
                <Link
                  as={`/association/${association.slug}`}
                  href="/association/[slug]"
                >
                  <a className="hover:underline">{association.name}</a>
                </Link>
              </li>
            ))}
        </ul>
        <h2 className="text-3xl">Tidligere foreninger eller foreningsnavn</h2>
        <ul className="list-disc">
          {associations
            ?.filter(({ active }) => !active)
            .map((association) => (
              <li key={association.slug}>
                <Link
                  as={`/association/${association.slug}`}
                  href="/association/[slug]"
                >
                  <a className="hover:underline">{association.name}</a>
                </Link>
              </li>
            ))}
        </ul>
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const associations = await getAllAssociationsForAssociationPage(preview);
  return {
    props: { associations },
    revalidate: 1,
  };
}
