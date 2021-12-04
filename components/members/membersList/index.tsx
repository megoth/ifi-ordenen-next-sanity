import React, { useMemo } from "react";
import { PersonForListQuery } from "../../../lib/api/people";
import { listStyle } from "./styles.css";
import { PeopleProvider } from "../../../contexts/peopleContext";
import MembersListItem from "./membersListItem";

interface Props {
  members: Array<PersonForListQuery>;
}

export default function MembersList({ members }: Props) {
  const usernames = useMemo(() => members.map(({ slug }) => slug), [members]);
  return (
    <PeopleProvider usernames={usernames}>
      <ul className={listStyle}>
        {members.map((person) => (
          <MembersListItem person={person} key={person.slug} />
        ))}
      </ul>
    </PeopleProvider>
  );
}
