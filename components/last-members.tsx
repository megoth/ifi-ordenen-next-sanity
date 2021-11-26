import React from "react";
import { getSortOrderForYear, PersonForListQuery } from "../lib/api/people";

interface Props {
  lastMembers: Array<PersonForListQuery>;
}

export default function LastMembers({ lastMembers }: Props) {
  const lastYear = Math.max.apply(
    null,
    lastMembers.map(({ year }) => year)
  );
  return (
    <div>
      <ul>
        {lastMembers
          .filter(({ year }) => year === lastYear)
          .sort((a, b) =>
            getSortOrderForYear(a) > getSortOrderForYear(b) ? 1 : -1
          )
          .map((person) => (
            <li key={person.slug}>
              {person.name} - {person.title}
            </li>
          ))}
      </ul>
    </div>
  );
}
