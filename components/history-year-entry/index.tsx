import { EventForListQuery } from "../../lib/api/history";
import { listStyle } from "./styles.css";
import HistoryYearListItem from "./history-year-list-item";
import { PersonForListQuery } from "../../lib/api/people";
import DateFormat from "../date-format";
import HistoryYearAwards from "./history-year-awards";

interface Props {
  events: Array<EventForListQuery>;
  members: Array<PersonForListQuery>;
  year: string;
}

export default function HistoryYearEntry({ events, members, year }: Props) {
  const majorEvents = events.filter((event) => event.major);
  const minorEvents = events.filter((event) => !event.major);
  return (
    <>
      <h3>
        <DateFormat date={year} format={"yyyy"} />
      </h3>
      <ul className={listStyle}>
        {majorEvents.map((event, index) => (
          <HistoryYearListItem
            event={event}
            key={`major-event-${event.year}-${index}`}
          />
        ))}
        <HistoryYearAwards members={members} year={year} />
        {minorEvents.length > 0 && (
          <li key={`minor-events-${year}`}>
            Mindre hendelser
            <ul className={listStyle}>
              {minorEvents.map((event, index) => (
                <HistoryYearListItem
                  event={event}
                  key={`minor-event-${event.year}-${index}`}
                />
              ))}
            </ul>
          </li>
        )}
      </ul>
    </>
  );
}
