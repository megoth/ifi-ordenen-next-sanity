import React from "react";
import { PersonForListQuery } from "../../../lib/api/people";
import MembersList from "../membersList";

interface Props {
  members: Array<PersonForListQuery>;
}

export default function MembersByYear({ members }: Props) {
  return <MembersList members={members} />;
}
