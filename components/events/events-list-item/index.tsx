import React, { MutableRefObject, useEffect, useRef } from "react";
import HistoryYearEntry from "../../history-year-entry";
import { EventForListQuery } from "../../../lib/api/history";
import { PersonForListQuery } from "../../../lib/api/people";

interface Props {
  events: Array<EventForListQuery>;
  // listRef: MutableRefObject<HTMLUListElement>;
  members: Array<PersonForListQuery>;
  year: string;
  expanded: boolean;
}

export default function EventsListItem({
  events,
  // listRef,
  members,
  year,
  expanded,
}: Props) {
  const ref = useRef<HTMLLIElement>(null);
  // useEffect(() => {
  //   console.log(year, ref.current.offsetTop, listRef.current.offsetTop);
  // }, [ref.current]);
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
