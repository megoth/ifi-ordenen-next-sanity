import React from "react";
import { imageBuilder } from "../../lib/sanity";
import { PersonQuery } from "../../lib/api/people";
import Container from "../container";

interface Props {
  person: PersonQuery;
}

export default function Person({ person }: Props) {
  return (
    <Container>
      <img
        alt={`Cover Image for ${person.name}`}
        src={imageBuilder(person.mainImage).url() || undefined}
      />
    </Container>
  );
}
