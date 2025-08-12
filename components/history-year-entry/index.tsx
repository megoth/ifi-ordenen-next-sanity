import { EventForListQuery } from "../../lib/api/history";
import {
  yearLinkStyle,
  yearListStyle,
  yearContentSelectedStyle,
  yearContentStyle,
  yearTitleStyle, assembliesStyle
} from "./styles.css";
import HistoryYearListItem from "./history-year-list-item";
import { PersonForListQuery } from "../../lib/api/people";
import DateFormat from "../date-format";
import HistoryYearAwards from "./history-year-awards";
import { useRouter } from "next/router";
import Link from "../link";
import cn from "classnames";
import { Fragment, useContext, useEffect, useState } from "react";
import EventsContext from "../../contexts/eventsContext";
import { getHref, toggleValueInArray } from "../../lib/utils";
import useHistory from "../../hooks/useHistory";
import { GeneralAssemblyForListQuery } from "../../lib/api/generalAssembly";
import HistoryYearAssembly from "./history-year-assembly";
import { useSearchParams } from "next/navigation";

interface Props {
  events: Array<EventForListQuery>;
  members: Array<PersonForListQuery>;
  assemblies: Array<GeneralAssemblyForListQuery>;
  year: string | number; // React parses it as number
  expanded: boolean;
}

export default function HistoryYearEntry({
                                           events,
                                           members,
                                           assemblies,
                                           year,
                                           expanded
                                         }: Props) {
  const majorEvents = events.filter((event) => event.major);
  const minorEvents = events.filter((event) => !event.major);
  const yearAsString = year.toString();
  const sortedAssemblies = assemblies.sort((a, b) => a.date > b.date ? 1 : -1);
  const numberOfAssemblies = assemblies.length;
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
  const searchParams = useSearchParams();
  const selectedFilters = searchParams.getAll("filter");
  const filterSelected = selectedFilters.length !== 0;
  const eventsFilterSelected = !filterSelected || (filterSelected && selectedFilters.indexOf("events") !== -1);
  const awardsFilterSelected = !filterSelected || (filterSelected && selectedFilters.indexOf("awards") !== -1);
  const assembliesFilterSelected = !filterSelected || (filterSelected && selectedFilters.indexOf("assemblies") !== -1);
  const showYear = [
    eventsFilterSelected && (majorEvents.length > 0 || minorEvents.length > 0),
    awardsFilterSelected && members.length > 0,
    assembliesFilterSelected && numberOfAssemblies > 0
  ].reduce((memo, value) => memo || value, false);

  useEffect(() => {
    const selectedYears = toggleValueInArray(yearAsString, years);
    setHref(
      getHref(router, {
        query: {
          year: selectedYears
        }
      })
    );
  }, [years]);

  if (!showYear) {
    return null;
  }

  return (
    <li>
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
          [yearContentSelectedStyle]: isSelected || expanded
        })}
      >
        <ul className={yearListStyle}>
          {eventsFilterSelected && majorEvents.map((event, index) => (
            <HistoryYearListItem
              event={event}
              key={`major-event-${event.year}-${index}`}
            />
          ))}
          {awardsFilterSelected && <HistoryYearAwards members={members} year={yearAsString} />}
          {eventsFilterSelected && minorEvents.length > 0 && (
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
          {assembliesFilterSelected && numberOfAssemblies > 0 && (
            <li key={`assemblies-${year}`}>
              <span className={assembliesStyle}>
                <span>Generalforsamlinger: </span>
                {sortedAssemblies.map((assembly, index) => (
                  <Fragment key={`assembly-${assembly._id}`}>
                    <HistoryYearAssembly assembly={assembly} />
                    {index <= (numberOfAssemblies - 2) && <span>, </span>}
                  </Fragment>
                ))}
              </span>
            </li>
          )}
        </ul>
      </div>
    </li>
  );
}
