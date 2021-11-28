import React from "react";
import { EventForListQuery } from "../../../lib/api/history";
import DateFormat from "../../date-format";
import Link from "../../link";

interface Props {
  event: EventForListQuery;
  index: number;
}

export default function HistoryYearListItem({ event, index }: Props) {
  return (
    <li key={`${event.major ? "major" : "minor"}-event-${event.year}-${index}`}>
      <DateFormat date={event.date} format={"d. MMMM"} postFix={": "} />
      {event.slug ? (
        <Link href="/history/[slug]" as={`/history/${event.slug}`}>
          {event.name}
        </Link>
      ) : (
        <span>{event.name}</span>
      )}
    </li>
  );
}
