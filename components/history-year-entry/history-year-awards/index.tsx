import React from "react";
import { PersonForListQuery } from "../../../lib/api/people";
import { onlyUnique } from "../../../lib/utils";
import { listStyle } from "../styles.css";
import Link from "../../link";

interface Props {
  members: Array<PersonForListQuery>;
  year: string;
}

export default function HistoryYearAwards({ members, year }: Props) {
  const titles = members
    ?.flatMap(({ titles }) => titles.find((title) => title.year === year))
    .sort((a, b) => (a.title.order > b.title.order ? 1 : -1))
    .map(({ title }) => title.name)
    .filter(onlyUnique);
  return (
    titles.length > 0 && (
      <li key={`awards-${year}`}>
        <span>Tildelinger av Ifi-ordenen</span>
        <ul className={listStyle}>
          {titles.map((titleName) => (
            <li>
              {titleName}:
              {members
                .filter((member) =>
                  member.titles.find(
                    (title) =>
                      title.title.name === titleName && title.year === year
                  )
                )
                .map((member, index) => (
                  <span>
                    {index !== 0 ? ", " : " "}
                    <Link href="/person/[slug]" as={`/person/${member.slug}`}>
                      {member.name}
                    </Link>
                  </span>
                ))}
            </li>
          ))}
        </ul>
      </li>
    )
  );
}
