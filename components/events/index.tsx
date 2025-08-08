import React from "react";
import { EventForListQuery, getYearsFromEvents } from "../../lib/api/history";
import HistoryYearEntry from "../history-year-entry";
import Container from "../container";
import { PersonForListQuery } from "../../lib/api/people";
import { getDatesFromAwards } from "../../lib/api/awards";
import { onlyUnique } from "../../lib/utils";
import { EventsProvider } from "../../contexts/eventsContext";
import { listStyle } from "./styles.css";
import EventsExpandAll from "./events-expand-all";
import { GeneralAssemblyForListQuery } from "../../lib/api/generalAssembly";

interface Props {
  events: Array<EventForListQuery>;
  members: Array<PersonForListQuery>;
  assemblies: Array<GeneralAssemblyForListQuery>;
}

export default function Events({ events, members, assemblies }: Props) {
  const eventYears = [
    ...getYearsFromEvents(events),
    ...getDatesFromAwards(members)
  ]
    .map((date) => date.substring(0, 4))
    .filter(onlyUnique)
    .sort()
    .reverse();
  // TODO: Might use expand/collapse-functionality later
  const expanded = true;
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
                assemblies={assemblies.filter((assembly) => assembly.date.substring(0, 4) === year)}
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
