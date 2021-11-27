import React from "react";
import { PersonForListQuery } from "../../lib/api/people";
import Container from "../container";
import MembersByYear from "./membersByYear";
import { useRouter } from "next/router";
import Link from "../link";
import MembersByTitle from "./membersByTitle";
import {
  tabLinkSelectedStyle,
  tabLinkStyle,
  tabSelectedStyle,
  tabsStyle,
  tabStyle,
} from "./styles.css";
import cn from "classnames";

interface Props {
  members: Array<PersonForListQuery>;
}

export default function Members({ members }: Props) {
  const viewsMap = {
    time: "Sist mottatte",
    rank: "Etter tittel",
  };
  const views = Object.keys(viewsMap);
  const router = useRouter();
  const chosenView = views.find((view) => view === router.query.by) || views[0];
  return (
    <Container>
      <ul className={tabsStyle}>
        {views.map((view) => (
          <li
            className={cn(tabStyle, {
              [tabSelectedStyle]: chosenView === view,
            })}
            key={view}
          >
            <Link
              href={`/person?by=${view}`}
              className={cn(tabLinkStyle, {
                [tabLinkSelectedStyle]: chosenView === view,
              })}
            >
              {viewsMap[view]}
            </Link>
          </li>
        ))}
      </ul>
      {chosenView === "time" && <MembersByYear members={members} />}
      {chosenView === "rank" && <MembersByTitle members={members} />}
    </Container>
  );
}
