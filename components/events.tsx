import React from "react";
import { EventForListQuery, getYears } from "../lib/api/history";
import HistoryYearEntry from "./history-year-entry";

interface Props {
  events: Array<EventForListQuery>;
}

export default function Events({ events }: Props) {
  const years = getYears(events).reverse();
  return (
    <>
      <ul>
        {years.map((year) => (
          <li key={`year-${year}`}>
            <HistoryYearEntry
              events={events.filter((event) => event.year === year)}
              year={year}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
