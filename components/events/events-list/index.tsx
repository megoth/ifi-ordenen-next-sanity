import React from "react";
import { listStyle } from "../styles.css";
import EventsListItem from "../events-list-item";
import { EventForListQuery } from "../../../lib/api/history";
import { PersonForListQuery } from "../../../lib/api/people";

interface Props {
  events: Array<EventForListQuery>;
  eventYears: string[];
  members: Array<PersonForListQuery>;
  expanded: boolean;
}

export default function EventsList({
  events,
  eventYears,
  members,
  expanded,
}: Props) {
  return (
    <ul className={listStyle}>
      {eventYears.map((year) => (
        <EventsListItem
          key={`year-${year}`}
          events={events}
          members={members}
          year={year}
          expanded={expanded}
        />
      ))}
    </ul>
  );
}
