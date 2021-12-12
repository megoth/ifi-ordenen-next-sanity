import React, { useEffect, useState } from "react";
import { PersonForListQuery } from "../../lib/api/people";
import Container from "../container";
import MembersByYear from "./membersByYear";
import { useRouter } from "next/router";
import MembersByTitle from "./membersByTitle";
import Tabs from "../tabs";
import Tab from "../tabs/tab";
import useHistory from "../../hooks/useHistory";
import { getHref } from "../../lib/utils";
import usePopState from "../../hooks/usePopState";

interface Props {
  members: Array<PersonForListQuery>;
}

export default function Members({ members }: Props) {
  const viewsMap = {
    time: "Sist mottatte",
    rank: "Etter tittel",
  };
  const views = Object.keys(viewsMap);
  const popStateEvent = usePopState();
  const router = useRouter();
  const [chosenView, setChosenView] = useState(
    views.find((view) => view === router.query.by) || views[0]
  );

  useEffect(
    () =>
      setChosenView(views.find((view) => view === router.query.by) || views[0]),
    [router?.query?.by]
  );

  useEffect(
    () => setChosenView(popStateEvent?.state.view || views[0]),
    [popStateEvent]
  );

  const history = useHistory();
  const selectView = (event, view) => {
    event.preventDefault();
    setChosenView(view);
    history?.pushState({ view }, "", event.target.href);
  };
  return (
    <Container>
      <Tabs>
        {views.map((view) => (
          <Tab
            key={view}
            href={getHref(router, {
              query: {
                by: [view],
              },
            })}
            selected={chosenView === view}
            onClick={(event) => selectView(event, view)}
          >
            {viewsMap[view]}
          </Tab>
        ))}
      </Tabs>
      {chosenView === "time" && <MembersByYear members={members} />}
      {chosenView === "rank" && <MembersByTitle members={members} />}
    </Container>
  );
}
