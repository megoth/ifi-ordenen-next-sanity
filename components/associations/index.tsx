import React from "react";
import { AssociationQuery } from "../../lib/api/associations";
import Link from "next/link";
import Container from "../container";

interface Props {
  associations: Array<AssociationQuery>;
}

export default function Associations({ associations }: Props) {
  return (
    <Container>
      <h2>Aktive foreninger</h2>
      <ul>
        {associations
          ?.filter(({ active }) => active)
          .map((association) => (
            <li key={association.slug}>
              <Link
                as={`/association/${association.slug}`}
                href="/association/[slug]"
              >
                <a>{association.name}</a>
              </Link>
            </li>
          ))}
      </ul>
      <h2>Tidligere foreninger eller foreningsnavn</h2>
      <ul>
        {associations
          ?.filter(({ active }) => !active)
          .map((association) => (
            <li key={association.slug}>
              <Link
                as={`/association/${association.slug}`}
                href="/association/[slug]"
              >
                <a>{association.name}</a>
              </Link>
            </li>
          ))}
      </ul>
    </Container>
  );
}
