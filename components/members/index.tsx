import React from "react";
import { PersonForListQuery } from "../../lib/api/people";
import { getTitles } from "../../lib/api/awards";
import Link from "next/link";
import Container from "../container";

interface Props {
  members: Array<PersonForListQuery>;
}

export default function Members({ members }: Props) {
  const titles = getTitles(members);
  const peopleSorted = members.sort(
    (a, b) => a.year * 100 + a.yearOrder - b.year * 100 + b.yearOrder
  );
  return (
    <Container>
      {titles.map((title) => (
        <section key={title}>
          <h2>{title}</h2>
          <ul>
            {peopleSorted
              .filter((person) => person.title === title)
              .map((person) => (
                <li key={person.slug}>
                  <Link as={`/person/${person.slug}`} href="/person/[slug]">
                    <a>
                      {person.name} ({person.title}, {person.year})
                    </a>
                  </Link>
                </li>
              ))}
          </ul>
        </section>
      ))}
    </Container>
  );
}
