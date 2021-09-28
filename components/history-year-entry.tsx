import { EventForListQuery } from "../lib/api/history";

interface Props {
  events: Array<EventForListQuery>;
  year: string;
}

export default function HistoryYearEntry({ events, year }: Props) {
  const majorEvents = events.filter((event) => event.major);
  const minorEvents = events.filter((event) => !event.major);
  return (
    <>
      <h3>{parseInt(year, 10)}</h3>
      <ul>
        {majorEvents.map((event, index) => (
          <li key={`major-event-${year}-${index}`}>{event.name}</li>
        ))}
      </ul>
    </>
  );
}
