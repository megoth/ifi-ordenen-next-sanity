import React from "react";
import { AssociationQuery } from "../../lib/api/associations";
import Container from "../container";
import { listStyle } from "./styles.css";
import AssociationsItem from "./associations-item";

interface Props {
  associations: Array<AssociationQuery>;
}

export default function Associations({ associations }: Props) {
  return (
    <Container>
      <ul className={listStyle}>
        {associations
          ?.filter(({ active }) => active)
          .map((association) => (
            <AssociationsItem association={association} />
          ))}
      </ul>
      <h2>Tidligere foreninger eller foreningsnavn</h2>
      <ul className={listStyle}>
        {associations
          ?.filter(({ active }) => !active)
          .map((association) => (
            <AssociationsItem association={association} />
          ))}
      </ul>
    </Container>
  );
}
