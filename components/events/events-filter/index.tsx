import Tabs from "../../tabs";
import Tab from "../../tabs/tab";
import { usePathname, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export default function EventsFilter() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const selectedFilters = searchParams.getAll("filter");
  const tabs = [
    { title: "Hendelser", filter: "events" },
    { title: "Tildelinger", filter: "awards" },
    { title: "Protokoller", filter: "assemblies" }
  ];

  const isSelected = useCallback((filter: string) => selectedFilters.indexOf(filter) !== -1, [selectedFilters]);

  return (
    <Tabs>
      <Tab href={`/${pathname}#events`} selected={selectedFilters.length === 0}>Alt</Tab>
      {tabs.map((tab) => (
        <Tab key={`filter-${tab.filter}`} href={`/${pathname}?filter=${tab.filter}#events`}
             selected={isSelected(tab.filter)}>{tab.title}</Tab>
      ))}
    </Tabs>
  );
}