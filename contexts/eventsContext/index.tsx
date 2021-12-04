import React, { createContext, ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  getArrayFromRouterQuery,
  getHashFromRouter,
  toggleValueInArray,
} from "../../lib/utils";

const EventsContext = createContext<{
  years: string[];
  year: null | string;
  toggleYear: (_: string) => void;
}>({
  years: [],
  year: null,
  toggleYear: () => {},
});

export default EventsContext;

interface Props {
  children: ReactNode;
}

export function EventsProvider({ children }: Props) {
  const router = useRouter();
  const [years, setYears] = useState<string[]>(
    getArrayFromRouterQuery(router?.query?.year)
  );
  const [year, setYear] = useState<string>(getHashFromRouter(router));

  useEffect(() => {
    setYears(getArrayFromRouterQuery(router?.query?.year));
  }, [router?.query?.year]);

  return (
    <EventsContext.Provider
      value={{
        years,
        year,
        toggleYear: (selectedYear) => {
          const selectedYears = toggleValueInArray(selectedYear, years);
          setYears(selectedYears);
          setYear(
            selectedYears.indexOf(selectedYear) === -1 ? null : selectedYear
          );
        },
      }}
    >
      {children}
    </EventsContext.Provider>
  );
}
