import React from "react";
import { EventForListQuery, getYearsFromEvents } from "../../lib/api/history";
import Container from "../container";
import { PersonForListQuery } from "../../lib/api/people";
import { getDatesFromAwards } from "../../lib/api/awards";
import { onlyUnique } from "../../lib/utils";
import { containerStyle, listStyle } from "./styles.css";
import { EventsProvider } from "../../contexts/eventsContext";
import EventsExpandAll from "./events-expand-all";
import EventsListItem from "./events-list-item";
import EventsTimeline from "./events-timeline";
import EventsList from "./events-list";

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
  const showTimeline = eventYears.length > 5;
  return (
    <EventsProvider>
      <Container>
        {!expanded && <EventsExpandAll years={eventYears} />}
      </Container>
      <Container>
        {showTimeline ? (
          <div className={containerStyle}>
            <EventsList
              events={events}
              eventYears={eventYears}
              members={members}
              expanded={expanded}
            />
            <EventsTimeline eventYears={eventYears} />
          </div>
        ) : (
          <EventsList
            events={events}
            eventYears={eventYears}
            members={members}
            expanded={expanded}
          />
        )}
      </Container>
    </EventsProvider>
  );
}
