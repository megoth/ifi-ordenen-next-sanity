import React from "react";
import { EventForListQuery, getYearsFromEvents } from "../../lib/api/history";
import HistoryYearEntry from "../history-year-entry";
import Container from "../container";
import { PersonForListQuery } from "../../lib/api/people";
import { getDatesFromAwards } from "../../lib/api/awards";
import { onlyUnique } from "../../lib/utils";

interface Props {
  events: Array<EventForListQuery>;
  members: Array<PersonForListQuery>;
}

export default function Events({ events, members }: Props) {
  const years = [...getYearsFromEvents(events), ...getDatesFromAwards(members)]
    .map((date) => date.substring(0, 4))
    .filter(onlyUnique)
    .sort()
    .reverse();
  return (
    <Container>
      <ul>
        {years.map((year) => (
          <li key={`year-${year}`}>
            <HistoryYearEntry
              events={events.filter(
                (event) => event.year.substring(0, 4) === year
              )}
              members={members.filter((member) =>
                member.titles.find(
                  (title) => title.date.substring(0, 4) === year
                )
              )}
              year={year}
            />
          </li>
        ))}
      </ul>
    </Container>
  );
}
