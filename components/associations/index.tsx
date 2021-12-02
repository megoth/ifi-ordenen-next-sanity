import React from "react";
import { AssociationQuery } from "../../lib/api/associations";
import Container from "../container";
import AssociationsList from "./associations-list";

interface Props {
  associations: Array<AssociationQuery>;
}

export default function Associations({ associations }: Props) {
  return (
    <Container>
      <AssociationsList
        associations={associations?.filter(({ active }) => active)}
      />
      <h2>Tidligere foreninger eller foreningsnavn</h2>
      <AssociationsList
        associations={associations?.filter(({ active }) => !active)}
      />
    </Container>
  );
}
