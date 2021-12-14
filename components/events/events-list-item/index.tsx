import React, { useContext, useEffect, useRef } from "react";
import HistoryYearEntry from "../../history-year-entry";
import { EventForListQuery } from "../../../lib/api/history";
import { PersonForListQuery } from "../../../lib/api/people";
import EventsContext from "../../../contexts/eventsContext";

interface Props {
  events: Array<EventForListQuery>;
  members: Array<PersonForListQuery>;
  year: string;
  expanded: boolean;
}

export default function EventsListItem({
  events,
  members,
  year,
  expanded,
}: Props) {
  const ref = useRef<HTMLLIElement>(null);
  const { focusYear } = useContext(EventsContext);

  useEffect(() => {
    if (focusYear === year) {
      ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [focusYear]);

  return (
    <li ref={ref}>
      <HistoryYearEntry
        events={events.filter((event) => event.year.indexOf(year) !== -1)}
        members={members.filter((member) =>
          member.titles.find((title) => title.date.indexOf(year) !== -1)
        )}
        year={year}
        expanded={expanded}
      />
    </li>
  );
}
