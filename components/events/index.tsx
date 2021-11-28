import React from "react";
import { EventForListQuery, getYearsFromEvents } from "../../lib/api/history";
import HistoryYearEntry from "../history-year-entry";
import Container from "../container";
import { PersonForListQuery } from "../../lib/api/people";
import { getYearsFromAwards } from "../../lib/api/awards";
import { onlyUnique } from "../../lib/utils";

interface Props {
  events: Array<EventForListQuery>;
  members: Array<PersonForListQuery>;
}

export default function Events({ events, members }: Props) {
  const years = [...getYearsFromEvents(events), ...getYearsFromAwards(members)]
    .filter(onlyUnique)
    .sort()
    .reverse();
  return (
    <Container>
      <ul>
        {years.map((year) => (
          <li key={`year-${year}`}>
            <HistoryYearEntry
              events={events.filter((event) => event.year === year)}
              members={members.filter((member) =>
                member.titles.find((title) => title.year === year)
              )}
              year={year}
            />
          </li>
        ))}
      </ul>
    </Container>
  );
}
