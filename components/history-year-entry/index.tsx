import { EventForListQuery, getYearInListHref } from "../../lib/api/history";
import {
  yearLinkStyle,
  yearListStyle,
  yearContentSelectedStyle,
  yearContentStyle,
  yearTitleStyle,
} from "./styles.css";
import HistoryYearListItem from "./history-year-list-item";
import { PersonForListQuery } from "../../lib/api/people";
import DateFormat from "../date-format";
import HistoryYearAwards from "./history-year-awards";
import { useRouter } from "next/router";
import Link from "../link";
import cn from "classnames";
import { useContext, useEffect, useState } from "react";
import EventsContext from "../../contexts/eventsContext";
import { getHref, toggleValueInArray } from "../../lib/utils";
import useHistory from "../../hooks/useHistory";

interface Props {
  events: Array<EventForListQuery>;
  members: Array<PersonForListQuery>;
  year: string | number; // React parses it as number
  expanded: boolean;
}

export default function HistoryYearEntry({
  events,
  members,
  year,
  expanded,
}: Props) {
  const majorEvents = events.filter((event) => event.major);
  const minorEvents = events.filter((event) => !event.major);
  const yearAsString = year.toString();
  const { years, toggleYear } = useContext(EventsContext);
  const router = useRouter();
  const isSelected = years.findIndex((y) => y === yearAsString) !== -1;
  const [href, setHref] = useState(getHref(router));
  const history = useHistory();
  const selectYear = (event) => {
    event.preventDefault();
    toggleYear(yearAsString);
    history?.pushState(
      { years: toggleValueInArray(yearAsString, years) },
      "",
      event.target.href
    );
  };

  useEffect(() => {
    const selectedYears = toggleValueInArray(yearAsString, years);
    setHref(
      getHref(router, {
        query: {
          year: selectedYears,
        },
      })
    );
  }, [years]);

  return (
    <>
      <h3 className={yearTitleStyle}>
        {expanded ? (
          <DateFormat date={yearAsString} format={"yyyy"} />
        ) : (
          <Link href={href} className={yearLinkStyle} onClick={selectYear}>
            <DateFormat date={yearAsString} format={"yyyy"} />
            &nbsp;
            {isSelected ? "↓" : "→"}
          </Link>
        )}
      </h3>
      <div
        className={cn(yearContentStyle, {
          [yearContentSelectedStyle]: isSelected || expanded,
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
