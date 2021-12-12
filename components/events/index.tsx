import React, { useEffect } from "react";
import { EventForListQuery, getYearsFromEvents } from "../../lib/api/history";
import HistoryYearEntry from "../history-year-entry";
import Container from "../container";
import { PersonForListQuery } from "../../lib/api/people";
import { getDatesFromAwards } from "../../lib/api/awards";
import { onlyUnique } from "../../lib/utils";
import { EventsProvider } from "../../contexts/eventsContext";
import { listStyle } from "./styles.css";
import EventsExpandAll from "./events-expand-all";

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
  const expanded = eventYears.length < 5;
  return (
    <EventsProvider>
      <Container>
        {!expanded && <EventsExpandAll years={eventYears} />}
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
                expanded={expanded}
              />
            </li>
          ))}
        </ul>
      </Container>
    </EventsProvider>
  );
}
