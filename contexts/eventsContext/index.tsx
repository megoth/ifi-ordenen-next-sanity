import React, { createContext, ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getArrayFromRouterQuery, toggleValueInArray } from "../../lib/utils";
import usePopState from "../../hooks/usePopState";

const EventsContext = createContext<{
  years: string[];
  toggleYear: (_: string) => void;
  setYears: (_: string[]) => void;
}>({
  years: [],
  toggleYear: () => {},
  setYears: () => {},
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
  const popStateEvent = usePopState();

  useEffect(() => {
    setYears(getArrayFromRouterQuery(router?.query?.year));
  }, [router?.query?.year]);

  useEffect(() => setYears(popStateEvent?.state.years || []), [popStateEvent]);

  return (
    <EventsContext.Provider
      value={{
        years,
        toggleYear: (selectedYear) =>
          setYears(toggleValueInArray(selectedYear, years)),
        setYears,
      }}
    >
      {children}
    </EventsContext.Provider>
  );
}
