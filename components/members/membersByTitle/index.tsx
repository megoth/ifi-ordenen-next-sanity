import React from "react";
import { PersonForListQuery } from "../../../lib/api/people";
import { getTitles } from "../../../lib/api/awards";
import MembersList from "../membersList";

interface Props {
  members: Array<PersonForListQuery>;
}

export default function MembersByTitle({ members }: Props) {
  const titles = getTitles(members);
  const peopleSorted = members.sort(
    (a, b) =>
      parseInt(a.titles[0].year, 10) * 100 +
      a.titles[0].yearOrder -
      parseInt(b.titles[0].year, 10) * 100 +
      b.titles[0].yearOrder
  );
  return (
    <>
      {titles.map((title) => (
        <section key={title}>
          <h2>{title}</h2>
          <MembersList
            members={peopleSorted.filter(
              (person) => person.titles[0].title.name === title
            )}
          />
        </section>
      ))}
    </>
  );
}
