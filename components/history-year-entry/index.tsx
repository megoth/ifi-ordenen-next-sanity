import { EventForListQuery, getYearInListHref } from "../../lib/api/history";
import {
  yearLinkStyle,
  yearListStyle,
  yearSelectedStyle,
  yearStyle,
} from "./styles.css";
import HistoryYearListItem from "./history-year-list-item";
import { PersonForListQuery } from "../../lib/api/people";
import DateFormat from "../date-format";
import HistoryYearAwards from "./history-year-awards";
import { useRouter } from "next/router";
import Link from "../link";
import cn from "classnames";
import { useContext } from "react";
import EventsContext from "../../contexts/eventsContext";
import { toggleValueInArray } from "../../lib/utils";
import useHistory from "../../hooks/useHistory";

interface Props {
  events: Array<EventForListQuery>;
  members: Array<PersonForListQuery>;
  year: string | number; // React parses it as number
}

export default function HistoryYearEntry({ events, members, year }: Props) {
  const majorEvents = events.filter((event) => event.major);
  const minorEvents = events.filter((event) => !event.major);
  const yearAsString = year.toString();
  const { years, toggleYear } = useContext(EventsContext);
  const router = useRouter();
  const isSelected = years.findIndex((y) => y === yearAsString) !== -1;
  const href = getYearInListHref(
    router,
    yearAsString,
    toggleValueInArray(yearAsString, years)
  );
  const history = useHistory();
  const selectYear = (event) => {
    event.preventDefault();
    toggleYear(yearAsString);
    history?.pushState({}, "", href);
  };
  return (
    <>
      <h3 id={yearAsString}>
        <Link href={href} className={yearLinkStyle} onClick={selectYear}>
          <DateFormat date={yearAsString} format={"yyyy"} />
          &nbsp;
          {isSelected ? "↓" : "→"}
        </Link>
      </h3>
      <div
        className={cn(yearStyle, {
          [yearSelectedStyle]: isSelected,
        })}
      >
        <ul className={yearListStyle}>
          {majorEvents.map((event, index) => (
            <HistoryYearListItem
              event={event}
              key={`major-event-${event.year}-${index}`}
            />
          ))}
          <HistoryYearAwards members={members} year={yearAsString} />
          {minorEvents.length > 0 && (
            <li key={`minor-events-${year}`}>
              Mindre hendelser
              <ul className={yearListStyle}>
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
      </div>
    </>
  );
}
