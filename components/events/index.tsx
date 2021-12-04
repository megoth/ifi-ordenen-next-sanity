import React from "react";
import { EventForListQuery, getYearsFromEvents } from "../../lib/api/history";
import HistoryYearEntry from "../history-year-entry";
import Container from "../container";
import { PersonForListQuery } from "../../lib/api/people";
import { getDatesFromAwards } from "../../lib/api/awards";
import { onlyUnique } from "../../lib/utils";
import { EventsProvider } from "../../contexts/eventsContext";
import { listStyle } from "./styles.css";

interface Props {
  events: Array<EventForListQuery>;
  members: Array<PersonForListQuery>;
}

export default function Events({ events, members }: Props) {
  const eventYears = [
    ...getYearsFromEvents(events),
    ...getDatesFromAwards(members),
  ]
    .map((date) => date.substring(0, 4))
    .filter(onlyUnique)
    .sort()
    .reverse();
  return (
    <EventsProvider>
      <Container>
        <ul className={listStyle}>
          {eventYears.map((year) => (
            <li key={`year-${year}`}>
              <HistoryYearEntry
                events={events.filter(
                  (event) => event.year.indexOf(year) !== -1
                )}
                members={members.filter((member) =>
                  member.titles.find((title) => title.date.indexOf(year) !== -1)
                )}
                year={year}
              />
            </li>
          ))}
        </ul>
      </Container>
    </EventsProvider>
  );
}
