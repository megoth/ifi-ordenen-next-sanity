import React, { createContext, ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getArrayFromRouterQuery, toggleValueInArray } from "../../lib/utils";

const EventsContext = createContext<{
  years: string[];
  toggleYear: (_: string) => void;
}>({
  years: [],
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

  useEffect(() => {
    setYears(getArrayFromRouterQuery(router?.query?.year));
  }, [router?.query?.year]);

  return (
    <EventsContext.Provider
      value={{
        years,
        toggleYear: (year) => setYears(toggleValueInArray(year, years)),
      }}
    >
      {children}
    </EventsContext.Provider>
  );
}
