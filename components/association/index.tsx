import React from "react";
import Container from "../container";
import { AssociationQuery } from "../../lib/api/associations";
import TextBlock from "../text-block";

interface Props {
  association: AssociationQuery;
}

export default function Association({ association }: Props) {
  return (
    <Container>
      <TextBlock text={association.description} />
    </Container>
  );
}
