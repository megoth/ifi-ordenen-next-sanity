import React from "react";
import { PersonForListQuery } from "../../lib/api/people";
import Container from "../container";
import MembersByYear from "./membersByYear";

interface Props {
  members: Array<PersonForListQuery>;
}

export default function Members({ members }: Props) {
  return (
    <Container>
      <MembersByYear members={members} />
    </Container>
  );
}
